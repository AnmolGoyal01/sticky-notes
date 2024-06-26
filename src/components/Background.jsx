import React from "react";

export default function Background() {
  return (
    <>
      <div className="h-full w-full z-[2] absolute">
        <h4 className="absolute left-1/2 -translate-x-1/2 mt-[6vh] max-w-[40%] text-center text-2xl lg:text-4xl tracking-tight leading-6 text-zinc-900 font-bold">
          Click on Add New button to add a new note
        </h4>
        <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] text-zinc-600 font-bold">
          Notes.
        </h3>
      </div>
    </>
  );
}
