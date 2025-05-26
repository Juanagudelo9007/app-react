import { useState } from "react";

function Notes() {
  const [cards, sertCards] = useState([{ id: 1, text: "" }]);

  return (
    <div>
      <div
        id="container"
        className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 place-items-start border-black bg-black"
      >
        <div
          id="cards"
          className="w-60 h-60 border-black bg-yellow-200 mt-8 text-center"
        >
          hola me llamo chichi
        </div>
        <div
          id="cards"
          className="w-60 h-60 border-black bg-yellow-200 mt-8 text-center"
        >
          hola me llamo chichi
        </div>
      </div>
    </div>
  );
}

export default Notes;
