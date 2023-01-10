import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { imageListState } from "../atom/imageAtom";
import ImageItem from "./ImageItem";
import "./components.css";

function ImageList() {
  const imageList = useRecoilValue(imageListState);
  return (
    <div className="image-list">
      {imageList.map((id: number) => (
        <Suspense key={id} fallback="Loading...">
          <ImageItem id={id} />
        </Suspense>
      ))}
    </div>
  );
}

export default ImageList;
