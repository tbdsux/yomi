import { IconCheck, IconFileFilled } from '@tabler/icons-react';

interface HeaderSaveBtnProps {
  actionHandler: () => void;
  saved: boolean;
}

function HeaderSaveBtn({ actionHandler, saved }: HeaderSaveBtnProps) {
  return (
    <button
      type="button"
      onClick={actionHandler}
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
  );
}

export default HeaderSaveBtn;
