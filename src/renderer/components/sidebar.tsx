import { IconAdjustments, IconNotes, IconTextPlus } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useNotesStore } from '../stores/useNotesStores';

export default function Sidebar() {
  const setCurrentNote = useNotesStore((s) => s.setCurrent);
  const navigate = useNavigate();

  const newNoteHandler = () => {
    setCurrentNote(null);
    navigate('/');
  };

  const listNotesHandler = () => {
    setCurrentNote(null);
    navigate('/notes');
  };

  return (
    <div className="fixed w-[50px] left-0 h-screen border-r py-4 px-2 bg-grey-100 flex flex-col items-center justify-between">
      <h1 className="text-sm font-black text-red-600 tracking-wide">yomi</h1>

      <div className="">
        <ul>
          <li>
            <button
              onClick={newNoteHandler}
              className="text-red-500 bg-red-100 opacity-80 hover:opacity-100 duration-300 p-1 rounded-lg my-1 flex"
            >
              <IconTextPlus className="" size={20} />
            </button>
          </li>

          <li>
            <button
              onClick={listNotesHandler}
              className="text-red-500 bg-red-100 opacity-80 hover:opacity-100 duration-300 p-1 rounded-lg my-1 flex"
            >
              <IconNotes className="" size={20} />
            </button>
          </li>
        </ul>
      </div>

      <div className="mt-32">
        <button
          title="App Settings"
          className="text-grey-900 bg-grey-200 opacity-80 hover:opacity-100 duration-300 p-1 rounded-lg"
        >
          <IconAdjustments size={20} />
        </button>
      </div>
    </div>
  );
}
