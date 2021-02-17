import DashboardSidebar from '../components/dashboard/sidebar';
import Head from 'next/head';

export default function withLayout({ children }: { children: any }): JSX.Element {
  return (
    <>
      <Head>
        <title>Панель администратора MeshHouse</title>
      </Head>
      <DashboardSidebar />
      <main className="dashboard__content">
        {children}
      </main>
    </>
  );
}
