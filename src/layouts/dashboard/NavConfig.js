// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Projects',
    path: '/dashboard/projects',
    icon: getIcon('eva:people-fill'),
  },

  {
    title: 'Docs',
    path: '/dashboard/docs',
    icon: getIcon('eva:file-text-fill'),
  },

  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
