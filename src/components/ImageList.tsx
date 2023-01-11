import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { imageListState } from "../store/imageState";
import ImageItem from "./ImageItem";
import "./components.css";

interface ImageItemType {
  id: number;
  title: string;
  url: string;
}

function ImageList() {
  const imageList = useRecoilValue(imageListState);
  return (
    <div className="image-list">
      {imageList.map((item: ImageItemType) => (
        <Suspense key={item.id} fallback="Loading...">
          <ImageItem item={item} />
        </Suspense>
      ))}
    </div>
  );
}

export default ImageList;
