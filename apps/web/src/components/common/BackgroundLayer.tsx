import { usePhotoStore } from '../../store/photoStore';

export default function BackgroundLayer() {
  const { photoDetail } = usePhotoStore();

  return (
    <div className="fixed inset-0 z-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${photoDetail?.download_url})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9] to-transparent" />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
