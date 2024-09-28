import HomePage from '../pages/HomePage/HomePage';
import Introduce from '../pages/Introduce/Introduce';

export const routes = [
  {
    path: '/',
    element: HomePage,
    isShowHeader: true
  },
  {
    path: '/gioi-thieu',
    element: Introduce,
    isShowHeader: true
  },
  {
    path: '/dich-vu',
    element: HomePage,
    title: 'Ông Hướng Farm',
    isShowHeader: true
  },
  {
    path: '/hinh-anh',
    element: HomePage,
    title: 'Ông Hướng Farm',
    isShowHeader: true
  },
  {
    path: '/booking',
    element: HomePage,
    title: 'Ông Hướng Farm',
    isShowHeader: true
  }
];
