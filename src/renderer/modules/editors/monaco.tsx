import { Editor, loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { defaultContent } from 'renderer/lib/content';
import { useNotesStore } from 'renderer/stores/useNotesStores';
import { useEditorProvider } from '../dashboard/editorContext';

loader.config({ monaco });

function EditorMonaco() {
  const current = useNotesStore((s) => s.current);

  const { monacoRef } = useEditorProvider();

  return (
    <div>
      <Editor
        height="100vh"
        defaultLanguage="markdown"
        defaultValue={current ? current.content : defaultContent}
        className="w-full h-full bg-white"
        options={{
          minimap: {
            enabled: false,
          },
          wordWrap: 'on',
          lineNumbers: 'off',
          scrollbar: {
            vertical: 'hidden',
            horizontal: 'hidden',
          },
          overviewRulerLanes: 0,
        }}
        onMount={(editor) => {
          if (!monacoRef) return;

          // @ts-ignore
          monacoRef.current = editor;
        }}
      />
    </div>
  );
}

export default EditorMonaco;
