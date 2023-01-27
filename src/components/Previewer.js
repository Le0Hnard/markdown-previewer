import { useContext } from 'react';
import { TextContext } from '../contexts/TextContext';
import { marked } from "marked";

const Previewer = () => {
  const { text, setText } = useContext(TextContext);

  // onChange={(e) => e.target.value = text}
  return (
    <textarea id="preview" value={marked.parse(text)} readOnly></textarea>
  )
}

export default Previewer;
