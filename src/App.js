import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { TextContextProvider } from "./contexts/TextContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex flex-column align-items-center align-content-center">
      <h1 className="h1">Markdown Previewer</h1>
      <TextContextProvider>
        <Editor />
        <Previewer />
      </TextContextProvider>
    </div>
  );
}

export default App;
