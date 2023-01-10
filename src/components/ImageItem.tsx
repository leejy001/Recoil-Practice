import { useRecoilValue, useRecoilState } from "recoil";
import { imageState, selectedImageState } from "../atom/imageAtom";
import "./components.css";

interface IdType {
  id: number;
}

function Image({ id }: IdType) {
  const { name, url }: any = useRecoilValue(imageState(id));
  const [selectedImage, setSelectedImage] = useRecoilState(selectedImageState);

  const onClick = () => {
    setSelectedImage(id);
  };

  return (
    <div className="image-item">
      <img
        className={selectedImage === id ? "selected" : "non-selected"}
        src={url}
        alt={name}
        onMouseDown={onClick}
      />
      <div className="name">{name}</div>
    </div>
  );
}

export default Image;
