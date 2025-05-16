import { Button } from '@repo/ui';
import { PhotoGetResponse } from '../types';
import { ROUTES } from '../routes';
import { useNavigate } from 'react-router-dom';

interface PhotoDetailCardProps {
  photoDetail?: PhotoGetResponse;
}

export default function PhotoDetailCard({ photoDetail }: PhotoDetailCardProps) {
  const navigate = useNavigate();

  const handleGoHomeClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div className="flex min-h-screen flex-col items-center gap-5 py-5 tablet:flex-row tablet:gap-10">
      <div className="h-auto w-full">
        <img className="h-auto w-full rounded-3xl" src={photoDetail?.download_url} alt="photo" />
      </div>

      <div className="flex w-full flex-col gap-3">
        <div className="rounded-3xl bg-white p-5">
          <div className="flex flex-col gap-4 tablet:flex-row">
            <div className="flex flex-col tablet:flex-1">
              <span className="text-md">id</span>
              <span className="text-md text-gray-500">{photoDetail?.id}</span>
            </div>
            <div className="flex flex-col tablet:flex-1">
              <span className="text-md">author</span>
              <span className="text-md text-gray-500">{photoDetail?.author}</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5">
          <div className="flex flex-col gap-4 tablet:flex-row">
            <div className="flex flex-col tablet:flex-1">
              <span className="text-md">width</span>
              <span className="text-md text-gray-500">{photoDetail?.width}</span>
            </div>
            <div className="flex flex-col tablet:flex-1">
              <span className="text-md">height</span>
              <span className="text-md text-gray-500">{photoDetail?.height}</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-md">url</span>
              <a className="text-md text-gray-500 underline" href={photoDetail?.url} target="_blank">
                {photoDetail?.url}
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-md">download_url</span>
              <a className="text-md text-gray-500 underline" href={photoDetail?.download_url} target="_blank">
                {photoDetail?.download_url}
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
