import { MilkdownProvider } from '@milkdown/react';
import MilkdownEditor from '../components/MilkdownEditor';
import DefaultLayout from '../layouts/default';

export default function Dashboard() {
  return (
    <DefaultLayout>
      <div className="w-11/12 my-4 mx-auto h-96">
        <MilkdownProvider>
          <MilkdownEditor />
        </MilkdownProvider>
      </div>
    </DefaultLayout>
  );
}
