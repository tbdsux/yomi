import { IconFileFilled } from '@tabler/icons-react';

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="My Notes"
          className="border-b-2 text-sm px-2 py-1 w-96 outline-none focus:border-red-300"
        />
      </div>

      <div>
        <button
          className="bg-red-300 hover:bg-red-500 p-1 rounded-lg text-white duration-300"
          title="Save Note"
        >
          <IconFileFilled size={14} />
        </button>
      </div>
    </div>
  );
}
