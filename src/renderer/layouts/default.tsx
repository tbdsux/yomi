import { ReactNode } from 'react';
import Sidebar from 'renderer/components/sidebar';

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="flex items-start">
      <Sidebar />

      <div className="py-4 px-2 w-full ml-[50px]">{children}</div>
    </div>
  );
}
