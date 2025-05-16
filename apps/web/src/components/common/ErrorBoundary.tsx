// web/src/components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@repo/ui';
import { ROUTES } from '../../routes';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-screen flex-col items-center justify-center p-5">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-red-600">오류가 발생했습니다</h2>
            <p className="mb-6 text-gray-600">예상치 못한 오류가 발생했습니다. 다시 시도해주세요.</p>
            <div className="mb-4 overflow-auto rounded bg-gray-100 p-4 text-sm text-gray-800">
              {this.state.error?.message}
            </div>
            <div className="flex justify-center">
              <Button onClick={() => (window.location.href = ROUTES.HOME)} className="w-full">
                홈으로 돌아가기
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
