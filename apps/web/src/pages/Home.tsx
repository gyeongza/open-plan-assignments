import { Button } from '@repo/ui';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';
import { APPLICANT_NAME } from '../constants';

export default function Home() {
  const navigate = useNavigate();

  const handleGoResultClick = () => {
    navigate(ROUTES.RESULT);
  };

  return (
    <div className="container mx-auto flex min-h-screen max-w-screen-desktop flex-col">
      <div className="flex items-center justify-center px-5 py-[17px]">
        <span className="text-center text-sm">{APPLICANT_NAME}</span>
      </div>

      <div className="flex flex-grow items-center justify-center p-[10px]">
        <span className="text-center text-lg font-semibold">안녕하세요 {APPLICANT_NAME}입니다.</span>
      </div>

      <div className="flex w-full flex-col items-center px-10 py-5">
        <Button onClick={handleGoResultClick} className="w-full tablet:w-[335px]">
          다음
        </Button>
      </div>
    </div>
  );
}
