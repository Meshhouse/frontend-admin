import Link from 'next/link';
import { Button, Stack } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from '@chakra-ui/react';

const DashboardSidebar = (): JSX.Element => (
  <aside className="dashboard__sidebar">
    <div className="sidebar__header">
      <div className="brand">
        <img
          className="brand__icon"
          src="/static/icons/logo-icon.svg"
          alt="MeshHouse"
        />
        <p className="brand__text">MeshHouse</p>
      </div>
      <div className="user">
        <div className="user__block">
          <Avatar
            className="user__avatar"
            name="John Smith"
          />
          <p className="user__title">Dan Abrahmov</p>
        </div>
        <Menu>
          <MenuButton as={Button} className="user__actions">
            <Icon as={FontAwesomeIcon} icon={faBars} />
          </MenuButton>
          <MenuList>
            <MenuItem>Выйти</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
    <nav className="sidebar__nav">
      <Stack direction="column" spacing={4}>
        <Link href="/dashboard">
          <Button className="sidebar__navlink">
            Дашборд
          </Button>
        </Link>
        <b className="sidebar__divider">Настройка контента</b>
        <Link href="/dashboard">
          <Button className="sidebar__navlink">
            Модели
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button className="sidebar__navlink">
            Категории
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button className="sidebar__navlink">
            Баннеры
          </Button>
        </Link>
        <b className="sidebar__divider">Пользователи</b>
        <Link href="/dashboard">
          <Button className="sidebar__navlink">
            Все пользователи
          </Button>
        </Link>
        <b className="sidebar__divider">Настройка страниц</b>
        <Link href="/dashboard">
          <Button className="sidebar__navlink">
            Главная страница
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button className="sidebar__navlink">
            Приложение
          </Button>
        </Link>
      </Stack>
    </nav>
  </aside>
);

export default DashboardSidebar;
