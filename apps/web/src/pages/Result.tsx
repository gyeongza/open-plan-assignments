import Header from '../components/common/Header';
import PhotoDetailCard from '../components/PhotoDetailCard';
import { Suspense } from 'react';
import PhotoDetailCardSkeleton from '../components/PhotoDetailCardSkeleton';
import BackgroundLayer from '../components/common/BackgroundLayer';

export default function Result() {
  return (
    <>
      <div className="container relative z-30 mx-auto max-w-screen-desktop px-5">
        <Header />
        <Suspense fallback={<PhotoDetailCardSkeleton />}>
          <PhotoDetailCard />
        </Suspense>
      </div>
      <BackgroundLayer />
    </>
  );
}
