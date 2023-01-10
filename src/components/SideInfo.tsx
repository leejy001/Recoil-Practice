import { useRecoilValue, useRecoilState } from "recoil";
import { selectedImageState, imageState } from "../atom/imageAtom";

function SideInfo() {
  const selectedImageId = useRecoilValue(selectedImageState);
  const [imageInfo, setImageInfo]: any = useRecoilState(
    imageState(selectedImageId)
  );

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setImageInfo({
      ...imageInfo,
      name: value
    });
  };

  return (
    <div className="side-container">
      <div className="sideinfo">
        <input type="text" value={imageInfo.name} onChange={onChange} />
        <img src={imageInfo.url} alt={imageInfo.name} />
        <div>
          <b>Id:</b> {imageInfo.id}
        </div>
      </div>
    </div>
  );
}

export default SideInfo;
