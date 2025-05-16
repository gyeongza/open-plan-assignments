import { useQuery } from '@tanstack/react-query';
import { photoApi } from '../api';
import { APPLICANT_NAME } from '../constants';
import { Button } from '@repo/ui';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';

export default function Result() {
  const navigate = useNavigate();

  const { data: photoDetail } = useQuery({
    queryKey: ['photo'],
    queryFn: () => photoApi.getPhotoDetail('0'),
  });

  const handleGoHomeClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${photoDetail?.download_url})` }}
      />
      <div className="absolute inset-0 z-10 bg-white opacity-90"></div>
      <div className="container relative z-20 mx-auto flex max-w-screen-desktop flex-col items-center px-5">
        <div className="flex items-center justify-center px-5 py-[17px]">
          <span className="text-center text-sm text-white">{APPLICANT_NAME}</span>
        </div>
        <div className="flex h-screen flex-col items-center gap-5 tablet:flex-row tablet:gap-10">
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
                  <span className="text-md text-gray-500">{photoDetail?.url}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-md">download_url</span>
                  <span className="text-md text-gray-500">{photoDetail?.download_url}</span>
                </div>
              </div>
            </div>
            <Button className="w-full mobile:w-[154px] mobile:self-center" onClick={handleGoHomeClick}>
              이전
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
