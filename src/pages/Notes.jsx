import { div } from "framer-motion/client";
import { useState } from "react";

function Notes() {
  const [cards, sertCards] = useState([{ id: 1, text: "" }]);

  const create = () => {
    sertCards([...cards, { id: cards.length + 1, text: "" }]);
  };

  return (
    <div>
      <div
        id="container"
        className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 place-items-start border-black bg-black relative"
      >
        {cards.map((c) => (
          <div
            key={c.id}
            contentEditable="false"
            className="relative w-60 h-60  border-black bg-yellow-200 mt-8 text-center px-2"
          >
            {c.text}
            <button className="absolute right-2 top-0" onClick={create}>
              +
            </button>
            <textarea
              style={{ resize: "none" }}
              className="w-[80%] h-full resize-none text-center outline-none"
            ></textarea>
          </div>
        ))}
        <div
          contentEditable="true"
          id="cards"
          className="w-60 h-60 border-black bg-yellow-200 mt-8 text-center"
        ></div>
        <div
          contentEditable="true"
          id="cards"
          className="w-60 h-60 border-black bg-yellow-200 mt-8 text-center
          p-3"
        >
          hola me llamo chichi
        </div>
      </div>
    </div>
  );
}

export default Notes;
