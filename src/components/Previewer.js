import { useContext } from 'react';
import { TextContext } from '../contexts/TextContext';

const Previewer = () => {
  const { text, setText } = useContext(TextContext);

  return (
    <textarea id="preview" onChange={(e) => setText(e.currentTarget.defaultValue)} defaultValue={text}></textarea>
  )
}

export default Previewer;
