import DashboardSidebar from '../components/dashboard/sidebar';
import Head from 'next/head';

export default function withLayout({ children }: { children: any }): JSX.Element {
  return (
    <div className="dashboard">
      <Head>
        <title>Панель администратора MeshHouse</title>
      </Head>
      <DashboardSidebar />
      <main className="dashboard__aside">
        <main className="dashboard__content">
          {children}
        </main>
      </main>
    </div>
  );
}
