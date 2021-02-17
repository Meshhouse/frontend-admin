import Link from 'next/link';

const DashboardSidebar = (): JSX.Element => (
  <aside className="dashboard__sidebar">
    <nav>
      <li>
        <Link href="/dashboard">
          <a href="/dashboard">Дашборд</a>
        </Link>
      </li>
    </nav>
  </aside>
);

export default DashboardSidebar;
