import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { usePhotoStore } from '../store/photoStore';
import { ROUTES } from '../routes';

export function withResultAccessGuard<T extends object>(Component: React.ComponentType<T>, delay = 1000) {
  return function GuardedComponent(props: T) {
    const { canAccessResult } = usePhotoStore();
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
      if (!canAccessResult) {
        toast.info('사진 조회 이력이 없어 메인으로 이동합니다.');

        const timer = setTimeout(() => setShouldRedirect(true), delay);
        return () => clearTimeout(timer);
      }

      return () => {};
    }, [canAccessResult]);

    if (shouldRedirect) {
      return <Navigate to={ROUTES.HOME} replace />;
    }

    if (!canAccessResult) {
      return null;
    }

    return <Component {...props} />;
  };
}
