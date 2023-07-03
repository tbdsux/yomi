import { create } from 'zustand';

export type EditorProps = 'milkdown' | 'monaco';

export interface AppSettingsState {
  editor: EditorProps;
  setEditor: (n: EditorProps) => void;
}

const useAppSettings = create<AppSettingsState>()((set) => ({
  editor: 'milkdown',
  setEditor: (n) => set(() => ({ editor: n })),
}));

export default useAppSettings;
