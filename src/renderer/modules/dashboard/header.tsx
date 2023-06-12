import { useInstance } from '@milkdown/react';
import { getMarkdown } from '@milkdown/utils';
import { IconCheck, IconFileFilled } from '@tabler/icons-react';
import { nanoid } from 'nanoid';
import { useRef, useState } from 'react';
import { useNotesStore } from '../../stores/useNotesStores';

export default function DashboardHeader() {
  const { saveNote, current } = useNotesStore((s) => ({
    saveNote: s.saveNote,
    current: s.current,
  }));

  const [saved, setSaved] = useState(false);

  const inputTitleRef = useRef<HTMLInputElement>(null);
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

  return (
    <div className="flex items-center justify-between">
      <div>
        <input
          ref={inputTitleRef}
          type="text"
          name="title"
          id="title"
          placeholder="My Notes"
          defaultValue={current?.title ?? 'Untitled'}
          className="border-b-2 text-sm px-2 py-1 w-96 outline-none focus:border-red-300"
        />
      </div>

      <div>
        <button
          type="button"
          onClick={saveNoteHandler}
          className="bg-rose-400 hover:bg-rose-500 inline-flex items-center p-1 rounded-lg text-white duration-300"
          title="Save Note"
        >
          <IconFileFilled size={14} />

          <small className="lowercase font-medium tracking-wide ml-0.5 inline-flex items-center">
            {saved ? (
              <>
                Saved
                <IconCheck size={14} />
              </>
            ) : (
              'Save'
            )}
          </small>
        </button>
      </div>
    </div>
  );
}
