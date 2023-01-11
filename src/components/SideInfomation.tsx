import { useRecoilState, useRecoilValue } from "recoil";
import { imageListState, recoilImageSelector } from "../store/imageState";

interface ImageItemType {
  id: number;
  title: string;
  url: string;
}

function SideInfomation() {
  const imageItem = useRecoilValue(recoilImageSelector);
  const [imageList, setImageList] = useRecoilState(imageListState);

  const replaceItemAtIndex = (
    arr: Array<ImageItemType>,
    index: number,
    newValue: ImageItemType
  ) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    const index = imageList.findIndex(
      (listItem: ImageItemType) => listItem.id === imageItem.id
    );

    const newList = replaceItemAtIndex(imageList, index, {
      ...imageItem,
      title: value
    });

    setImageList(newList);
  };

  return (
    <div className="side-container">
      <div className="sideinfo">
        {imageItem ? (
          <>
            <input
              type="text"
              value={imageItem.title}
              onChange={handleChange}
            />
            <img src={imageItem.url} alt={imageItem.title} />
            <div>
              <b>Id:</b> {imageItem.id}
            </div>
            <div>
              <b>Url:</b> {imageItem.url}
            </div>
          </>
        ) : (
          <>
            <b>Add Image</b>
            <p>or</p>
            <b>Click another Image</b>
          </>
        )}
      </div>
    </div>
  );
}

export default SideInfomation;
