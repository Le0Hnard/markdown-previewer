import { useContext } from "react";
import { TextContext } from "../contexts/TextContext";
import { marked } from "marked";
import * as DOMPurify from "dompurify";
import "bootstrap/dist/css/bootstrap.min.css";

const Previewer = () => {
  const { text } = useContext(TextContext);

  const createMarkup = () => {
    return {
      __html: DOMPurify.sanitize(marked.parse(text)),
    };
  };

  return (
    <div className="card w-50 h-10">
      <div className="card-header">Previewer</div>
      <div
        id="preview"
        className="card-body"
        dangerouslySetInnerHTML={createMarkup()}
        readOnly
      />
    </div>
  );
};

export default Previewer;
