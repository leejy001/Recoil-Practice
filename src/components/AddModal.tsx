import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { imageListState } from "../store/imageState";

interface ImageItem {
  id: number;
  title: string;
  url: string;
}

interface PropsType {
  setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddModal({ setIsToggle }: PropsType) {
  const [imageList, setImageList] = useRecoilState(imageListState);
  const [title, setTitle] = useState<string>("");
  const counter = imageList.length + 1;

  const handleChange = (event: React.FormEvent) => {
    setTitle((event.target as HTMLInputElement).value);
  };

  const addImage = () => {
    const insertItem: ImageItem = {
      id: counter,
      title,
      url: `https://picsum.photos/id/${counter}/200/300`
    };

    setImageList((item: ImageItem[]) => [...item, insertItem]);
    setIsToggle(false);
  };

  return (
    <div className="modal-body">
      <p className="modal-title">Add Image</p>
      <input type="text" value={title} onChange={handleChange} />
      <div className="modal-button-wrapper">
        <button
          className="modal-button"
          type="button"
          onClick={() => setIsToggle(false)}
        >
          Cancel
        </button>
        <button className="modal-button" type="button" onClick={addImage}>
          Add Item
        </button>
      </div>
    </div>
  );
}

export default AddModal;
