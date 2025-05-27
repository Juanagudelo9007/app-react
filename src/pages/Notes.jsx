import { useState } from "react";

function Notes() {
  const [cards, sertCards] = useState([{ id: 1, text: "" }]);

  const create = () => {
    sertCards([...cards, { id: cards.length + 1, text: "" }]);
  };

  const btnDelete = (index) => {
    const erase = cards.filter((p) => p.id !== index);
    sertCards(erase);
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
            className="relative w-60 h-60  border-black bg-yellow-200 mt-8 text-center py-2"
          >
            {c.text}
            <button className="absolute right-2 top-1" onClick={create}>
              +
            </button>
            <textarea
              style={{ resize: "none" }}
              className="w-[80%] h-full resize-none text-center outline-none"
            ></textarea>
            <button onClick={() => btnDelete(c.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
