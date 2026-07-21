import { Suspense } from 'react';
import { 
  createBrowserRouter, 
  RouterProvider, 
  Navigate 
} from 'react-router-dom';

// Layouts
import Layout from '../components/common/Layout';
import AuthLayout from '../components/common/AuthLayout';

// Pages
import Home from '../pages/Home';
import Doctor from '../pages/Doctor';
import DoctorDetail from '../pages/DoctorDetails';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/Error';
import Services from '../pages/Service';
import ServiceDetail from '../pages/ServiceDetails';

// Components
import  LoadingSpinner  from '../components/ui/LoadingSpinner';

// Lazy loading wrapper
const RouteWrapper = ({ children }) => (
  <Suspense fallback={
    <div className="flex-center min-h-[60vh]">
      <LoadingSpinner size="lg" />
    </div>
  }>
    {children}
  </Suspense>
);

// Auth guard
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('auth_token');
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Create router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <RouteWrapper>
            <Home />
          </RouteWrapper>
        ),
      },
      {
        path: 'doctors',
        element: (
          <RouteWrapper>
            <Doctor />
          </RouteWrapper>
        ),
      },
      {
        path: 'doctors/:id',
        element: (
          <RouteWrapper>
            <DoctorDetail />
          </RouteWrapper>
        ),
      },
      {
        path: 'services',
        element: (
          <RouteWrapper>
            <Services />
          </RouteWrapper>
        ),
      },
      {
        path: 'services/:serviceId',
        element: (
          <RouteWrapper>
            <ServiceDetail />
          </RouteWrapper>
        ),
      },
      {
        path: 'about',
        element: (
          <RouteWrapper>
            <About />
          </RouteWrapper>
        ),
      },
      {
        path: 'contact',
        element: (
          <RouteWrapper>
            <Contact />
          </RouteWrapper>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <RouteWrapper>
              <div className="container-custom py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
                <p className="text-gray-600">Welcome to your dashboard. This is a protected route.</p>
              </div>
            </RouteWrapper>
          </ProtectedRoute>
        ),
      },
      {
        path: 'home',
        element: <Navigate to="/" replace />,
      },
    ],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: (
          <RouteWrapper>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Please login to access your account.
              </p>
              <button 
                onClick={() => {
                  localStorage.setItem('auth_token', 'demo_token');
                  window.location.href = '/dashboard';
                }}
                className="btn btn-primary w-full"
              >
                Demo Login
              </button>
            </div>
          </RouteWrapper>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;