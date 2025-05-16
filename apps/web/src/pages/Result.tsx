import Header from '../components/common/Header';
import PhotoDetailCard from '../components/PhotoDetailCard';
import { Suspense } from 'react';

export default function Result() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#D9D9D9] to-transparent" />
      <div className="absolute inset-0 z-20 bg-black/30" />
      <div className="container relative z-30 mx-auto flex max-w-screen-desktop flex-col items-center px-5">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <PhotoDetailCard />
        </Suspense>
      </div>
    </div>
  );
}
