import "./App.css";
import CanvasDraw from "react-canvas-draw";
import ToggleBtn from "./components/ToggleBtn";

function App() {
  return (
    <>
      <ToggleBtn />
      <CanvasDraw
        canvasWidth={window.innerWidth - 6}
        canvasHeight={window.innerHeight - 50}
        brushRadius={3}
        hideGrid
        lazyRadius={0}
        backgroundColor="#222"
        brushColor="#aaa"
      />
    </>
  );
}

export default App;
