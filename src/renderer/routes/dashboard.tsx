import { AppEditors } from 'renderer/lib/editors';
import EditorProvider from 'renderer/modules/dashboard/editorContext';
import useAppSettings from 'renderer/stores/useAppSettings';
import Container from '../components/Container';
import DashboardHeader from '../modules/dashboard/header';

export default function Dashboard() {
  const editor = useAppSettings((s) => s.editor);

  return (
    <Container>
      <EditorProvider>
        <DashboardHeader />

        <hr className="my-3" />

        {AppEditors[editor]}
      </EditorProvider>
    </Container>
  );
}
