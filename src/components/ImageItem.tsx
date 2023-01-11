import { useRecoilState } from "recoil";
import { imageListState, selectedImageState } from "../store/imageState";
import "./components.css";

interface ImageItemType {
  id: number;
  title: string;
  url: string;
}

function Image({ item }: { item: ImageItemType }) {
  const { id, title, url } = item;
  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);
  const [imageList, setImageList] = useRecoilState(imageListState);

  const removeItemAtIndex = (arr: Array<ImageItemType>, index: number) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };

  const removeItemClick = () => {
    const index = imageList.findIndex(
      (listItem: ImageItemType) => listItem.id === id
    );

    const newList = removeItemAtIndex(imageList, index);
    setImageList(newList);
  };

  return (
    <div className="image-item">
      <button className="delete-button" type="button" onClick={removeItemClick}>
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

export default Image;
