import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { ImageItemType } from "types/item";
import { ModalType } from "types/modal";
import { imageListState } from "../store/imageState";

function AddModal({ setIsToggle }: ModalType) {
  const [imageList, setImageList] = useRecoilState(imageListState);
  const [title, setTitle] = useState<string>("");
  const counter =
    imageList.length > 0 ? imageList[imageList.length - 1].id + 1 : 1;

  const handleChange = (event: React.FormEvent) => {
    setTitle((event.target as HTMLInputElement).value);
  };

  const addImage = () => {
    const insertItem: ImageItemType = {
      id: counter,
      title,
      url: `https://picsum.photos/id/${counter}/200/300`
    };

    setImageList((item: ImageItemType[]) => [...item, insertItem]);
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
