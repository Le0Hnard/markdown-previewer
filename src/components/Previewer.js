import { useContext } from 'react';
import { TextContext } from '../contexts/TextContext';
import { marked } from "marked";
import * as DOMPurify from "dompurify";

const Previewer = () => {
  const { text } = useContext(TextContext);

  const createMarkup = () => {
    return  {
      __html: DOMPurify.sanitize(marked.parse(text))
    }
  };

  return (
    <div id="preview" dangerouslySetInnerHTML={createMarkup()} readOnly />
  )
}

export default Previewer;
