import { IconAdjustments, IconTextPlus } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useNotesStore } from '../stores/useNotesStores';

import icon from '../../../assets/icon.png';

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

  const settingsHandler = () => {
    setCurrentNote(null);
    navigate('/settings');
  };

  return (
    <div className="fixed w-[50px] left-0 h-screen border-r py-4 px-2 bg-grey-100 flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <button type="button" onClick={listNotesHandler}>
          <img src={icon} className="h-5 w-5 object-contain" alt="yomi" />
        </button>

        <button
          type="button"
          onClick={newNoteHandler}
          className="text-red-500 bg-red-100 opacity-80 mt-4 hover:opacity-100 duration-300 p-0.5 rounded-lg flex"
        >
          <IconTextPlus className="" size={20} />
        </button>
      </div>

      <div className="mt-32">
        <button
          type="button"
          onClick={settingsHandler}
          title="App Settings"
          className="text-grey-900 bg-grey-200 opacity-80 hover:opacity-100 duration-300 p-1 rounded-lg"
        >
          <IconAdjustments size={20} />
        </button>
      </div>
    </div>
  );
}
