import { useContext } from "react";
import { TextContext } from "../contexts/TextContext";

const Editor = () => {
  const { text, setText } = useContext(TextContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="m-5 flex-grow-1 w-25">
      <textarea
        id="editor"
        className="w-100"
        style={{ resize: "none" }}
        rows="7"
        onChange={handleChange}
        defaultValue={text}
      ></textarea>
    </div>
  );
};

export default Editor;
