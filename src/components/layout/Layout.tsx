import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Outlet />
    </div>
  );
};

export default Layout; 