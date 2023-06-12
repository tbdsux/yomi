import { create } from 'zustand';
import { getFromLocalStorage, saveToLocalStorage } from '../lib/localStorage';
import { INotes } from '../typings/notes';

interface INotesData {
  notes: {
    [key: string]: INotes;
  };
  current: INotes | null;
}

interface NotesState extends INotesData {
  setCurrent: (n: INotes | null) => void;
  saveNote: (note: INotes) => void;
  initData: () => void;
}

export const YOMI_DATA_KEY = 'yomi-data';

export const useNotesStore = create<NotesState>()((set) => ({
  notes: {},
  current: null,
  setCurrent: (n) => set(() => ({ current: n })),
  saveNote: (note) =>
    set((state) => {
      const { id } = note;

      let lastUpdated: number | undefined;
      if (state.notes[id]) {
        // if exists
        lastUpdated = new Date().getTime();
      }

      const newState = {
        notes: {
          ...state.notes,
          [id]: {
            lastUpdated,
            ...note,
          },
        },
        currentNote: id,
      };

      saveToLocalStorage(YOMI_DATA_KEY, newState);

      return newState;
    }),
  initData: () =>
    set((state) => {
      const data = getFromLocalStorage<INotesData>(YOMI_DATA_KEY);

      if (!data) return state;

      return data;
    }),
}));
