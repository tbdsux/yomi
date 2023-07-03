import { IconCode } from '@tabler/icons-react';
import { useRef } from 'react';
import useAppSettings from 'renderer/stores/useAppSettings';
import { useNotesStore } from '../../stores/useNotesStores';
import EditorMilkdownSave from './milkdown/save';
import EditorMonacoSave from './monaco/save';

export default function DashboardHeader() {
  const current = useNotesStore((s) => s.current);
  const { editor, setEditor } = useAppSettings((s) => ({
    setEditor: s.setEditor,
    editor: s.editor,
  }));

  const inputTitleRef = useRef<HTMLInputElement>(null);

  const switchEditor = () => {
    setEditor(editor === 'milkdown' ? 'monaco' : 'milkdown');
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

      <div className="inline-flex items-stretch">
        {editor === 'milkdown' ? (
          <EditorMilkdownSave inputTitleRef={inputTitleRef} />
        ) : (
          <EditorMonacoSave inputTitleRef={inputTitleRef} />
        )}

        <button
          onClick={switchEditor}
          type="button"
          title="Switch Editor"
          className="bg-gray-400 hover:bg-gray-500 inline-flex items-center px-2 rounded-lg text-white duration-300 ml-1"
        >
          <IconCode size={14} />
        </button>
      </div>
    </div>
  );
}
