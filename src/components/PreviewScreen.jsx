import { ImCross } from "react-icons/im";
import { useState } from "react";
import { color, motion } from "framer-motion";

export default function PreviewScreen({
  currentDisplay,
  setCurrentDisplay,
  previewCardIndex,
  content,
  editCard,
}) {
  if (currentDisplay == "PREVIEW_SCREEN") {
    const [isEditable, setIsEditable] = useState(false);
    const [currentText, setCurrentText] = useState(null);
    return (
      <div className="fixed w-full h-screen z-[5]">
        <div className="bg-zinc-900/90 fixed z-[5] h-[80%] w-[80%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl flex flex-col items-center justify-between p-2">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 900, damping: 14 }}
            className="absolute right-0 top-0 p-1 text-lg bg-zinc-200 rounded-full"
            onClick={() => {
              setCurrentDisplay("HOME");
            }}
          >
            <ImCross />
          </motion.button>
          <textarea
            readOnly={!isEditable}
            className="w-full bg-transparent text-zinc-300 text-3xl p-4 h-[85%] border-none rounded-2xl"
            onChange={(e) => {
              setCurrentText((prev) => e.target.value);
            }}
          >
            {content[previewCardIndex]}
          </textarea>
          {isEditable ? (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 700, damping: 15 }}
              className="h-[10%] w-[95%] bg-green-700 hover:bg-green-800 rounded-2xl text-xl md:text-2xl text-zinc-200"
              onClick={() => {
                if (currentText !== null) {
                  editCard(previewCardIndex, currentText);
                }
                setIsEditable((prev) => !prev);
                setCurrentDisplay("HOME");
              }}
            >
              Save Changes
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 700, damping: 15 }}
              className="h-[10%] w-[95%] bg-zinc-700 rounded-2xl text-xl md:text-2xl text-zinc-200"
              onClick={() => {
                setIsEditable((prev) => !prev);
                // setCurrentDisplay("HOME");
              }}
            >
              Edit Card
            </motion.button>
          )}
        </div>
      </div>
    );
  }
}

{
  /* <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 700, damping: 15 }}
            className="h-[10%] w-[95%] bg-zinc-700 rounded-2xl text-xl md:text-2xl text-zinc-200"
            onClick={() => {
              if (currentText !== null) {
                editCard(previewCardIndex, currentText);
              }
              // setCurrentDisplay("HOME");
            }}
          >
            Save Changes
          </motion.button> */
}
