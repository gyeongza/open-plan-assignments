export default function PhotoDetailCardSkeleton() {
  const sectionLength = 3;

  return (
    <div className="flex min-h-screen flex-col items-center gap-5 py-5 tablet:flex-row tablet:gap-10">
      <div className="h-auto w-full">
        <div className="h-[350px] w-full rounded-3xl bg-gray-300" />
      </div>

      <div className="flex w-full flex-col gap-3">
        {Array.from({ length: sectionLength }).map((_, index) => (
          <div key={index} className="rounded-3xl bg-white p-5">
            <div className="flex flex-col gap-4 tablet:flex-row">
              <div className="flex flex-col gap-1 tablet:flex-1">
                <div className="h-4 w-16 rounded bg-gray-300" />
                <div className="h-5 w-32 rounded bg-gray-300" />
              </div>
              <div className="flex flex-col gap-1 tablet:flex-1">
                <div className="h-4 w-16 rounded bg-gray-300" />
                <div className="h-5 w-32 rounded bg-gray-300" />
              </div>
            </div>
          </div>
        ))}
        <div className="h-10 w-full rounded-xl bg-gray-300 tablet:w-[154px] tablet:self-center" />
      </div>
    </div>
  );
}
