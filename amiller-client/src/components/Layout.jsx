import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <NavBar />
      <main className="pb-16 pt-20">
        <Outlet />
      </main>

      <footer style={{ backgroundColor: '#0b3d91' }} className="mt-8 text-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm">© Wireframe Studio</p>
            <p className="text-sm">Bringing favourite episodes back to life</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;