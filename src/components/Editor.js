import { useContext } from 'react';
import { TextContext } from '../contexts/TextContext';

const Editor = () => {
  const { text, setText } = useContext(TextContext);

  return (
    <textarea id="editor" onChange={(e) => setText(e.currentTarget.defaultValue)} defaultValue={text}></textarea>
  )
}

export default Editor;
