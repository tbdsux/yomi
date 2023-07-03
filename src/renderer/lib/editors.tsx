import EditorMilkdown from '../modules/editors/milkdown';
import EditorMonaco from '../modules/editors/monaco';

const AppEditors = {
  milkdown: <EditorMilkdown />,
  monaco: <EditorMonaco />,
};

// eslint-disable-next-line import/prefer-default-export
export { AppEditors };
