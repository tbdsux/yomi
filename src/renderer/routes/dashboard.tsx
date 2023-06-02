import { MilkdownProvider } from '@milkdown/react';
import MilkdownEditor from '../components/MilkdownEditor';
import DefaultLayout from '../layouts/default';
import DashboardHeader from '../modules/dashboard/header';

export default function Dashboard() {
  return (
    <DefaultLayout>
      <div className="w-11/12 mb-4 mx-auto ">
        <DashboardHeader />

        <hr className="my-3" />

        <div className="h-full">
          <MilkdownProvider>
            <MilkdownEditor />
          </MilkdownProvider>
        </div>
      </div>
    </DefaultLayout>
  );
}
