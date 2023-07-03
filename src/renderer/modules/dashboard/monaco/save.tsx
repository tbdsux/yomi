import { nanoid } from 'nanoid';
import { RefObject, useState } from 'react';
import { useNotesStore } from 'renderer/stores/useNotesStores';
import { useEditorProvider } from '../editorContext';
import HeaderSaveBtn from '../saveBtn';

interface EditorSaveProps {
  inputTitleRef: RefObject<HTMLInputElement>;
}

function EditorMonacoSave({ inputTitleRef }: EditorSaveProps) {
  const [saved, setSaved] = useState(false);
  const { saveNote, current } = useNotesStore((s) => ({
    saveNote: s.saveNote,
    current: s.current,
  }));

  const { monacoRef } = useEditorProvider();

  const saveNoteHandler = () => {
    if (!monacoRef) return;
    if (!monacoRef.current) return;

    const title = inputTitleRef.current?.value;
    if (!title) return;

    let id = '';
    if (current) {
      id = current.id;
    } else {
      id = nanoid();
    }

    const content = monacoRef.current.getValue();

    saveNote({ id, title, content, createdDate: new Date().getTime() });
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return <HeaderSaveBtn actionHandler={saveNoteHandler} saved={saved} />;
}

export default EditorMonacoSave;
