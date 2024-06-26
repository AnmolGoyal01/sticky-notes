import React, { useRef, useState } from "react";
import Card from "./Card";
import AddButton from "./AddButton";
import AddNewCard from "./AddNewCard";
import PreviewScreen from "./PreviewScreen";

export default function Foreground() {
  const data = [];

  const [content, setContent] = useState(data);
  const [currentDisplay, setCurrentDisplay] = useState("HOME");
  const [previewCardIndex, setPreviewCardIndex] = useState(0)
  const ref = useRef(null);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setCurrentDisplay("HOME");
    }
  });

  const addCard = (newContentAdded) => {
    const newContent = [...content];
    newContent.push(newContentAdded);
    setContent(newContent);
  };
  const deleteCard = (index) => {
    const newContent = [...content];
    newContent.splice(index, 1);
    setContent(newContent);
  };
  const editCard = (index, newText) => {
    const newContent = [...content];
    newContent[index] = newText;
    setContent(newContent);
  };

  return (
    <>
      <AddButton
        currentDisplay={currentDisplay}
        setCurrentDisplay={setCurrentDisplay}
      />
      <div
        ref={ref}
        className="absolute z-[3] h-screen w-full p-6 overflow-scroll flex shrink-0 flex-wrap gap-6 justify-start content-start"
      >
        {content.map((element, idx) => {
          return (
            <Card
              content={element}
              index={idx}
              deleteCard={deleteCard}
              reference={ref}
              setCurrentDisplay={setCurrentDisplay}
              setPreviewCardIndex={setPreviewCardIndex}
              key={idx}
            />
          );
        })}
      </div>
      <AddNewCard
        addContent={addCard}
        // display={addNewPreview}
        // setDisplay={toggleAddNewPreview}
        currentDisplay={currentDisplay}
        setCurrentDisplay={setCurrentDisplay}
      />
      <PreviewScreen
        currentDisplay={currentDisplay}
        setCurrentDisplay={setCurrentDisplay}
        previewCardIndex={previewCardIndex}
        content = {content}
        editCard = {editCard}
      />
    </>
  );
}
