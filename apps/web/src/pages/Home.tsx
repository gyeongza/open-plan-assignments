import { useState, useEffect } from 'react';
import { Button, Spinner } from '@repo/ui';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';
import { APPLICANT_NAME } from '../constants';
import Header from '../components/common/Header';
import { useDebounce } from '../hooks/useDebounce';
import { usePhotoStore } from '../store/photoStore';
import { toast } from 'react-toastify';
export default function Home() {
  const navigate = useNavigate();
  const { hasViewed } = usePhotoStore();
  const { allowResultAccess } = usePhotoStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (hasViewed) {
      toast.info('이미 사진을 조회한 이력이 있어 결과 페이지로 이동합니다.');

      const timer = setTimeout(() => {
        navigate(ROUTES.RESULT);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [hasViewed, navigate]);

  const debouncedNavigate = useDebounce(async () => {
    setIsLoading(true);
    await allowResultAccess();
    await new Promise(resolve => setTimeout(resolve, 500));
    navigate(ROUTES.RESULT);
  }, 500);

  const handleGoResultClick = () => {
    if (!isLoading) {
      debouncedNavigate();
    }
  };

  return (
    <div className="container mx-auto flex min-h-screen max-w-screen-desktop flex-col">
      <Header />
      <div className="flex flex-grow items-center justify-center p-[10px]">
        <span className="text-center text-lg font-semibold">안녕하세요 {APPLICANT_NAME}입니다.</span>
      </div>
      <div className="flex w-full flex-col items-center px-10 py-5">
        <Button onClick={handleGoResultClick} className="w-full tablet:w-[335px]" disabled={isLoading || hasViewed}>
          {isLoading ? <Spinner /> : '다음'}
        </Button>
      </div>
    </div>
  );
}
