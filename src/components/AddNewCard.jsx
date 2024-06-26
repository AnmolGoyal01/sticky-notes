import React, { useState, useSyncExternalStore } from "react";
import { ImCross } from "react-icons/im";
import { color, motion } from "framer-motion";


export default function AddNewCard({ addContent, display, setDisplay }) {
  if (display) {
    const [currentText, setCurrentText] = useState("");
    return (
      <div className="bg-zinc-900/90 fixed z-[5] h-[80%] w-[80%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl flex flex-col items-center justify-between p-2">
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 900, damping: 14 }}
          className="absolute right-0 top-0 p-1 text-lg bg-zinc-200 rounded-full"
          onClick={() => setDisplay(false)}
        >
          <ImCross />
        </motion.button>
        <textarea
          className=" bg-transparent text-zinc-300 w-full p-4 h-[85%] border-none rounded-2xl text-2xl"
          onChange={(e) => {
            setCurrentText((prev) => e.target.value);
          }}
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 700, damping: 15 }}
          className="h-[10%] w-[95%] bg-zinc-700 rounded-2xl text-xl text-zinc-200"
          onClick={() => {
            addContent(currentText);
            setDisplay(false);
          }}
        >
          Add
        </motion.button>
      </div>
    );
  }
}
