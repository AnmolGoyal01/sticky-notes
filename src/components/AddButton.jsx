import React from "react";
import { color, motion } from "framer-motion";

export default function AddButton({ currentDisplay, setCurrentDisplay }) {
  if (currentDisplay == "HOME") {
    return (
      <div className="fixed right-0  z-[5]">
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 900, damping: 10 }}
          className="p-2 m-2 bg-zinc-900 text-zinc-300 hover:scale-[1.1] duration-100 ease-in-out rounded-lg text-lg text-bold"
          onClick={() => {
            setCurrentDisplay("NEW_CARD_SCREEN");
          }}
        >
          Add New
        </motion.button>
      </div>
    );
  }
}
