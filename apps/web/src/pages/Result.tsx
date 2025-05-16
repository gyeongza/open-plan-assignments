import { useQuery } from '@tanstack/react-query';
import { photoApi } from '../api';
import Header from '../components/common/Header';
import PhotoDetailCard from '../components/PhotoDetailCard';

export default function Result() {
  const { data: photoDetail } = useQuery({
    queryKey: ['photo'],
    queryFn: () => photoApi.getPhotoDetail('0'),
  });

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${photoDetail?.download_url})` }}
      />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-[#D9D9D9] to-transparent backdrop-blur-xl"
        style={{
          backdropFilter: 'blur(41.49px)',
          WebkitBackdropFilter: 'blur(41.49px)',
        }}
      />
      <div className="container relative z-20 mx-auto flex max-w-screen-desktop flex-col items-center px-5">
        <Header />
        <PhotoDetailCard photoDetail={photoDetail} />
      </div>
    </div>
  );
}
