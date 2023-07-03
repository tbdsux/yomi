import { MilkdownProvider } from '@milkdown/react';
import { editor } from 'monaco-editor';
import { ReactNode, RefObject, createContext, useContext, useRef } from 'react';

interface EditorContextProps {
  monacoRef?: RefObject<editor.IStandaloneCodeEditor>;
}

const EditorContext = createContext<EditorContextProps>({
  monacoRef: undefined,
});

interface EditorProviderProps {
  children: ReactNode;
}

function EditorProvider({ children }: EditorProviderProps) {
  const monacoRef = useRef<editor.IStandaloneCodeEditor>(null);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <EditorContext.Provider value={{ monacoRef }}>
      <MilkdownProvider>{children}</MilkdownProvider>
    </EditorContext.Provider>
  );
}

export const useEditorProvider = () => {
  const context = useContext(EditorContext);
  if (context === undefined)
    throw new Error('<EditorProvider></EditorProvider>');

  return context;
};

export default EditorProvider;
