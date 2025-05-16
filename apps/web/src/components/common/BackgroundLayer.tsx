export default function BackgroundLayer() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9] to-transparent" />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
