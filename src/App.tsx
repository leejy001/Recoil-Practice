import { imageListState } from "atom/imageAtom";
import { useRecoilState } from "recoil";
import ImageList from "components/ImageList";
import SideInfo from "components/SideInfo";
import "./App.css";

function App() {
  const [imageList, setImageList] = useRecoilState(imageListState);
  const counter = imageList.length + 1;

  const addImage = () => {
    setImageList([...imageList, counter]);
  };

  return (
    <div className="App">
      <p className="title">Image List</p>
      <div className="main">
        <ImageList />
        <SideInfo />
      </div>
      <button className="add-button" type="button" onClick={addImage}>
        Add Image
      </button>
    </div>
  );
}

export default App;
