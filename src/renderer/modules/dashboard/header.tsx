import { useInstance } from '@milkdown/react';
import { getMarkdown } from '@milkdown/utils';
import { IconFileFilled } from '@tabler/icons-react';
import { nanoid } from 'nanoid';
import { useRef } from 'react';
import { useNotesStore } from '../../stores/useNotesStores';

export default function DashboardHeader() {
  const { saveNote, current } = useNotesStore((s) => ({
    saveNote: s.saveNote,
    current: s.current,
  }));

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
          defaultValue={current?.title}
          className="border-b-2 text-sm px-2 py-1 w-96 outline-none focus:border-red-300"
        />
      </div>

      <div>
        <button
          onClick={saveNoteHandler}
          className="bg-red-300 hover:bg-red-500 p-1 rounded-lg text-white duration-300"
          title="Save Note"
        >
          <IconFileFilled size={14} />
        </button>
      </div>
    </div>
  );
}
