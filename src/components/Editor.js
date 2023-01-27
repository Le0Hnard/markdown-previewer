import { useContext } from 'react';
import { TextContext } from '../contexts/TextContext';

const Editor = () => {
  const { text, setText } = useContext(TextContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <textarea id="editor" onChange={handleChange} defaultValue={text}></textarea>
  )
}

export default Editor;
