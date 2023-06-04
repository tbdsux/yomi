import { create } from 'zustand';
import { getFromLocalStorage, saveToLocalStorage } from '../lib/localStorage';
import { IKeyNotes, INotes } from '../typings/notes';

interface INotesData {
  notes: INotes[];
  keyNotes: IKeyNotes[];
  currentNote: string; // id of current note in editor
}

interface NotesState extends INotesData {
  setCurrentNote: (id: string) => void;
  saveNote: (note: INotes) => void;
  initData: () => void;
}

export const YOMI_DATA_KEY = 'yomi-data';

export const useNotesStore = create<NotesState>()((set) => ({
  notes: [],
  keyNotes: [],
  currentNote: '',
  setCurrentNote: (id) => set(() => ({ currentNote: id })),
  saveNote: (note) =>
    set((state) => {
      const { id, title } = note;

      const newState = {
        notes: [note, ...state.notes],
        keyNotes: [{ id, title }, ...state.keyNotes],
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
