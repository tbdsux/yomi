import { useInstance } from '@milkdown/react';
import { getMarkdown } from '@milkdown/utils';
import { nanoid } from 'nanoid';
import { RefObject, useState } from 'react';
import { useNotesStore } from 'renderer/stores/useNotesStores';
import HeaderSaveBtn from '../saveBtn';

interface EditorSaveProps {
  inputTitleRef: RefObject<HTMLInputElement>;
}

function EditorMilkdownSave({ inputTitleRef }: EditorSaveProps) {
  const [saved, setSaved] = useState(false);
  const { saveNote, current } = useNotesStore((s) => ({
    saveNote: s.saveNote,
    current: s.current,
  }));

  const [loading, get] = useInstance();

  const saveNoteHandler = () => {
    if (loading) return;

    const title = inputTitleRef.current?.value;
    if (!title) return;

    let id = '';
    if (current) {
      id = current.id;
    } else {
      id = nanoid();
    }

    const editor = get();
    const content = editor.action(getMarkdown());

    saveNote({ id, title, content, createdDate: new Date().getTime() });
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return <HeaderSaveBtn actionHandler={saveNoteHandler} saved={saved} />;
}

export default EditorMilkdownSave;
