import { DashboardOutlined, UserOutlined, AppstoreOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const dashBoardNavTree = [
  {
    key: 'home',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'home',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [],
  },
];

const extraNavTree = [
  {
    key: 'extra',
    path: `${APP_PREFIX_PATH}/pages`,
    title: 'sidenav.pages',
    icon: '',
    breadcrumb: true,
    submenu: [
      {
        key: 'extra-pages',
        path: `${APP_PREFIX_PATH}/pages`,
        title: 'Clients',
        icon: UserOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'extra-pages-list',
            path: `${APP_PREFIX_PATH}/pages/client-list`,
            title: 'Clients List',
            icon: '',
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
    ],
  },
];

const appsNavTree = [
  {
    key: 'apps',
    path: `${APP_PREFIX_PATH}/apps`,
    title: 'sidenav.apps',
    breadcrumb: false,
    submenu: [
      {
        key: 'apps-scheduler',
        path: `${APP_PREFIX_PATH}/apps/scheduler`,
        title: 'Scheduler',
        icon: AppstoreOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree, ...extraNavTree, ...appsNavTree];

export default navigationConfig;
