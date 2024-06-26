import React, { useRef, useState } from "react";
import Card from "./Card";
import AddButton from "./AddButton";
import AddNewCard from "./AddNewCard";
import PreviewScreen from "./PreviewScreen";

export default function Foreground() {
  const data = [];

  const [content, setContent] = useState(data);
  const [addNewPreview, toggleAddNewPreview] = useState(false);
  const [preview, setPreview] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  const ref = useRef(null);

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

  return (
    <>
      <AddButton display={!addNewPreview} setDisplay={toggleAddNewPreview} />
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
              key={idx}
            />
          );
        })}
      </div>
      <AddNewCard
        addContent={addCard}
        display={addNewPreview}
        setDisplay={toggleAddNewPreview}
      />
      {/* <PreviewScreen
        preview={preview}
        setPreview={setPreview}
        previewIndex={previewIndex}
        content={content}
        setContent={setContent}
      /> */}
    </>
  );
}
