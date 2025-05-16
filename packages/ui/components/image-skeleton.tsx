import { useState } from 'react';

interface ImageSkeletonProps {
  src: string | null;
  alt: string;
  className?: string;
}

export function ImageSkeleton({ src, alt, className = '' }: ImageSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);

  const showSkeleton = !src || isLoading;

  return (
    <div className="h-auto w-full">
      {showSkeleton && <div className="h-[350px] w-full animate-pulse rounded-3xl bg-gray-300" />}
      {src && (
        <img
          src={src}
          alt={alt}
          className={`h-auto w-full rounded-3xl transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${className}`}
          onLoad={() => setIsLoading(false)}
        />
      )}
    </div>
  );
}
