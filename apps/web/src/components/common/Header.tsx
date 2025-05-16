import { useLocation } from 'react-router-dom';
import { APPLICANT_NAME } from '../../constants';
import { ROUTES } from '../../routes';
import { usePhotoStore } from '../../store/photoStore';
import { Button } from '@repo/ui';

export default function Header() {
  const { clearPhotoDetail } = usePhotoStore();
  const isHome = useLocation().pathname === ROUTES.HOME;

  const handleClearPhotoDetail = () => {
    clearPhotoDetail();
  };

  return (
    <div className="relative flex items-center px-5 py-[17px]">
      <span className={`${!isHome && 'text-white'} absolute left-1/2 -translate-x-1/2 text-center text-sm`}>
        {APPLICANT_NAME}
      </span>
      <div className="ml-auto">
        <Button className="h-8" onClick={handleClearPhotoDetail}>
          조회이력 초기화
        </Button>
      </div>
    </div>
  );
}
