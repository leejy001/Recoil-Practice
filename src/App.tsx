import { useState } from "react";
import ImageList from "components/ImageList";
import SideInfomation from "components/SideInfomation";
import AddModal from "components/AddModal";
import "./App.css";

function App() {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div className="App">
      <p className="title">Image List</p>
      <div className="main">
        <ImageList />
        <SideInfomation />
      </div>
      <button
        className="toggle-button"
        type="button"
        onClick={() => setIsToggle(!isToggle)}
      >
        Add Image
      </button>
      {isToggle && <AddModal setIsToggle={setIsToggle} />}
    </div>
  );
}

export default App;
