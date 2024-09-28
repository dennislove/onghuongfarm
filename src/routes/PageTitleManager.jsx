import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { match } from 'path-to-regexp';

const PageTitleManager = () => {
  const location = useLocation();
  const titleMap = {
    '/': 'Ông Hướng Farm',
    '/gioi-thieu': 'OHF | Giới Thiệu',
    '/hinh-anh': 'OHF | Hình Ảnh',
    '/chia-se/:slug': 'OHF | Dịch Vụ', // Đường dẫn này sử dụng tham số
    '/dich-vu': 'OHF | Dịch Vụ',
    '/booking': 'OHF | Booking'
  };
  useEffect(() => {
    const updateTitle = () => {
      let title = '404'; // Tiêu đề mặc định khi không khớp bất kỳ đường dẫn nào

      // Kiểm tra xem có khớp với bất kỳ đường dẫn nào trong titleMap không
      for (let path in titleMap) {
        const matcher = match(path, {
          decode: decodeURIComponent,
          end: path === '/dich-vu/:slug' ? false : true
        });
        if (matcher(location.pathname)) {
          title = titleMap[path];
          break;
        }
      }
      document.title = title;
    };

    updateTitle();
  }, [location]); // Phụ thuộc vào location

  return null;
};

export default PageTitleManager;
