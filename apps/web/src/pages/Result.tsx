import Header from '../components/common/Header';
import PhotoDetailCard from '../components/PhotoDetailCard';
import { Suspense, useEffect } from 'react';
import PhotoDetailCardSkeleton from '../components/PhotoDetailCardSkeleton';
import BackgroundLayer from '../components/common/BackgroundLayer';
import { usePhotoStore } from '../store/photoStore';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';
import ErrorBoundary from '../components/common/ErrorBoundary';

export default function Result() {
  const { hasViewed } = usePhotoStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasViewed) {
      const timer = setTimeout(() => {
        navigate(ROUTES.HOME);
      }, 1000);

      return () => clearTimeout(timer);
    }

    return () => {};
  }, [hasViewed, navigate]);

  return (
    <>
      <div className="container relative z-30 mx-auto max-w-screen-desktop px-5">
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<PhotoDetailCardSkeleton />}>
            <PhotoDetailCard />
          </Suspense>
        </ErrorBoundary>
      </div>
      <BackgroundLayer />
    </>
  );
}
