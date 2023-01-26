import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { TextContextProvider } from "./contexts/TextContext";

function App() {
  return (
    <>
      <TextContextProvider>
        <Editor />
        <Previewer />
      </TextContextProvider>
    </>
  );
}

export default App;
