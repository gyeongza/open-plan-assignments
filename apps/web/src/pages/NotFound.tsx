import { Button } from '@repo/ui';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';
import Header from '../components/common/Header';

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div className="container mx-auto flex min-h-screen max-w-screen-desktop flex-col">
      <Header />
      <div className="flex flex-grow flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">여긴 아무것도 없어요 🥲</h1>
        <p className="text-md text-gray-600">
          찾으시던 페이지는 사라졌거나 <br className="hidden tablet:inline" />
          주소가 잘못되었을 수도 있어요.
        </p>
        <Button onClick={handleGoHome} className="mt-4 w-full tablet:w-[335px]">
          홈으로 돌아가기
        </Button>
      </div>
    </div>
  );
}
