import { MilkdownProvider } from '@milkdown/react';
import Container from '../components/Container';
import MilkdownEditor from '../modules/dashboard/MilkdownEditor';
import DashboardHeader from '../modules/dashboard/header';

export default function Dashboard() {
  return (
    <Container>
      <MilkdownProvider>
        <DashboardHeader />

        <hr className="my-3" />

        <div className="h-full">
          <MilkdownEditor />
        </div>
      </MilkdownProvider>
    </Container>
  );
}
