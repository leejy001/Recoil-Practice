import { useRecoilState } from "recoil";
import { ImageItemType } from "types/item";
import { removeItemAtIndex } from "util/editItemList";
import { imageListState, selectedImageState } from "../store/imageState";
import "./components.css";

function ImageItem({ item }: { item: ImageItemType }) {
  const { id, title, url } = item;
  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);
  const [imageList, setImageList] = useRecoilState(imageListState);

  const handleRemoveItem = () => {
    const index = imageList.findIndex(
      (listItem: ImageItemType) => listItem.id === id
    );

    const newList = removeItemAtIndex(imageList, index);
    setImageList(newList);
  };

  return (
    <div className="image-item">
      <button
        className="delete-button"
        type="button"
        onClick={handleRemoveItem}
      >
        🗑
      </button>
      <img
        className={selectedImage === id ? "selected" : "non-selected"}
        src={url}
        alt={title}
        onMouseDown={() => setSelectedImage(id)}
      />
      <div className="name">{title}</div>
    </div>
  );
}

export default ImageItem;
