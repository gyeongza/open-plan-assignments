import { useLocation } from 'react-router-dom';
import { APPLICANT_NAME } from '../constants';
import { ROUTES } from '../routes';

export default function Header() {
  const isHome = useLocation().pathname === ROUTES.HOME;

  return (
    <div className="flex items-center justify-center px-5 py-[17px]">
      <span className={`text-center text-sm ${!isHome && 'text-white'}`}>{APPLICANT_NAME}</span>
    </div>
  );
}
