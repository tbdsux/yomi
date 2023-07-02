import { useNavigate } from 'react-router-dom';
import { INotes } from 'renderer/typings/notes';
import { useNotesStore } from '../../stores/useNotesStores';

export default function ListNotes() {
  const notes = useNotesStore((s) => s.notes);
  const setCurrentNote = useNotesStore((s) => s.setCurrent);

  const navigate = useNavigate();

  const viewNoteHandler = (id: string, note: INotes) => {
    setCurrentNote(note);

    navigate(`/${id}`);
  };

  if (Object.keys(notes).length === 0) {
    return (
      <div>
        <p className="">No notes created yet, create one now!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-6">
      {Object.entries(notes)
        .sort(
          ([, a], [, b]) =>
            (b.lastUpdated ? b.lastUpdated : b.createdDate) -
            (a.lastUpdated ? a.lastUpdated : a.createdDate)
        )
        .map(([id, note]) => (
          <button
            key={id}
            onClick={() => viewNoteHandler(id, note)}
            type="button"
            title={note.title}
            className="flex flex-col bg-grey-100 hover:bg-grey-200 duration-300 py-3 m-1 px-4 rounded-lg"
          >
            <div>
              <strong className="font-bold text-lg text-grey-700 tracking-wide">
                {note.title}
              </strong>
            </div>

            <div className="flex items-center justify-between text-grey-500">
              <small className="text-xs" title="Last Updated">
                {note.lastUpdated && (
                  <>Last Updated: {new Date(note.lastUpdated).toDateString()}</>
                )}
              </small>

              <small className="text-xs" title="Created Date">
                {new Date(note.createdDate).toDateString()}
              </small>
            </div>
          </button>
        ))}
    </div>
  );
}
