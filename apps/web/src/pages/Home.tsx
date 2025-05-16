import { useState } from 'react';
import { Button, Spinner } from '@repo/ui';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';
import { APPLICANT_NAME } from '../constants';
import Header from '../components/common/Header';
import { useDebounce } from '../hooks/useDebounce';

export default function Home() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const debouncedNavigate = useDebounce(async () => {
    setIsLoading(true);
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
        <Button onClick={handleGoResultClick} className="w-full tablet:w-[335px]" disabled={isLoading}>
          {isLoading ? <Spinner /> : '다음'}
        </Button>
      </div>
    </div>
  );
}
