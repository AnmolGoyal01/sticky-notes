import React from "react";
import { ImCross } from "react-icons/im";
import { color, motion } from "framer-motion";

export default function Card(props) {
  return (
    <motion.div
      drag
      dragConstraints={props.reference}
      whileDrag={{ scale: 1.1, backgroundColor : "#72727ae2"}}
      whileHover={{ scale: 1.03, backgroundColor: "#72727a"}}
      transition={{ type: "spring", stiffness: 700, damping: 19 }}
      className="relative bg-zinc-500/80 text-zinc-900 h-[35vh] w-[25vh] rounded-xl p-1 flex flex-col gap-2 items-center"
    >
      <motion.div
        whileHover={{ scale: 1.13 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 700, damping: 20 }}
        className="absolute right-0 top-0 p-1 text-lg bg-zinc-200 rounded-full"
        onClick={() => {
          props.deleteCard(props.index);
        }}
      >
        <ImCross />
      </motion.div>
      <p className="w-full h-[80%] overflow-y-auto overflow-x-hidden text-ellipsis rounded-lg  p-1">
        {props.content}
      </p>
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 700, damping: 20 }}
        className="bg-zinc-900 text-zinc-300 w-[95%] h-[16%] rounded-lg border-none shadow-lg"
        onClick={() => {}}
      >
        Preview
      </motion.button>
    </motion.div>
  );
}
