import { useState, useEffect } from "react";
import { db } from "../components/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

function Notes({ user }) {
  const [cards, setCards] = useState([{ id: 1, text: "" }]);

  const load = async (uid) => {
    const docRef = doc(db, "Notas", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setCards(docSnap.data().cards);
    }
  };

  const save = async (uid, notes) => {
    const docRef = doc(db, "Notas", uid);
    await setDoc(docRef, { cards: notes });
  };

  useEffect(() => {
    if (user) {
      load(user.uid);
    }
  }, [user]);

  const create = () => {
    const newCard = [...cards, { id: cards.length + 1, text: "" }];
    setCards(newCard);
    save(user.uid, newCard);
  };

  const btnDelete = (index) => {
    if (cards.length === 1) {
      return;
    }
    const erase = cards.filter((p) => p.id !== index);
    setCards(erase);
    save(user.uid, erase);
  };

  return (
    <div>
      <div
        id="container"
        className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 place-items-center border-black bg-black relative"
      >
        {cards.map((c) => (
          <div
            key={c.id}
            className="relative w-60 h-60  border-black bg-yellow-200 mt-8 text-center py-2 pt-6"
          >
            {c.text}
            <button className="absolute left-2 top-1" onClick={create}>
              +
            </button>
            <textarea
              value={c.text}
              onChange={(e) => {
                const newCards = cards.map((card) =>
                  card.id === c.id ? { ...card, text: e.target.value } : card
                );
                setCards(newCards);
              }}
              onBlur={() => save(user.uid, cards)}
              style={{ resize: "none" }}
              className=" mt-6 w-[70%] h-[80%] resize-none text-center outline-none"
            ></textarea>
            <button
              className="absolute right-2 top-1"
              onClick={() => btnDelete(c.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
