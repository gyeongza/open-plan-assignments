import { Button, ImageSkeleton } from '@repo/ui';
import { ROUTES } from '../routes';
import { useNavigate } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { photoApi } from '../api';
import { usePhotoStore } from '../store/photoStore';
import { useEffect } from 'react';
import { withResultAccessGuard } from './withResultAccessGuard';

function PhotoDetailCard() {
  const navigate = useNavigate();
  const { photoDetail, setPhotoDetail } = usePhotoStore();

  const shouldFetchData = !photoDetail;

  const { data: fetchedPhotoDetail } = useSuspenseQuery({
    queryKey: ['photo', shouldFetchData],
    queryFn: () => {
      if (shouldFetchData) {
        return photoApi.getPhotoDetail('0');
      }
      return photoDetail;
    },
  });

  useEffect(() => {
    if (fetchedPhotoDetail && shouldFetchData) {
      setPhotoDetail(fetchedPhotoDetail);
    }
  }, [fetchedPhotoDetail, setPhotoDetail, shouldFetchData]);

  const handleGoHomeClick = () => {
    navigate(ROUTES.HOME);
  };

  const displayData = photoDetail || fetchedPhotoDetail;

  return (
    <div className="flex min-h-screen flex-col items-center gap-5 py-5 tablet:flex-row tablet:gap-10">
      <div className="h-auto w-full">
        <ImageSkeleton src={displayData?.download_url} alt="photo" />
      </div>
      <div className="flex w-full flex-col gap-3">
        <div className="rounded-3xl bg-white p-5">
          <div className="flex flex-col gap-4 tablet:flex-row">
            <div className="flex flex-col tablet:flex-1">
              <span className="text-md">id</span>
              <span className="text-md text-gray-500">{displayData?.id}</span>
            </div>
            <div className="flex flex-col tablet:flex-1">
              <span className="text-md">author</span>
              <span className="text-md text-gray-500">{displayData?.author}</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5">
          <div className="flex flex-col gap-4 tablet:flex-row">
            <div className="flex flex-col tablet:flex-1">
              <span className="text-md">width</span>
              <span className="text-md text-gray-500">{displayData?.width}</span>
            </div>
            <div className="flex flex-col tablet:flex-1">
              <span className="text-md">height</span>
              <span className="text-md text-gray-500">{displayData?.height}</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-md">url</span>
              <a className="text-md text-gray-500 underline" href={displayData?.url} target="_blank">
                {displayData?.url}
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-md">download_url</span>
              <a className="text-md text-gray-500 underline" href={displayData?.download_url} target="_blank">
                {displayData?.download_url}
              </a>
            </div>
          </div>
        </div>
        <Button className="w-full tablet:w-[154px] tablet:self-center" onClick={handleGoHomeClick}>
          이전
        </Button>
      </div>
    </div>
  );
}

export default withResultAccessGuard(PhotoDetailCard);
