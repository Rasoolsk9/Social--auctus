export default function Logo({ className="" }) {
  return (
    <div className={`font-extrabold text-xl tracking-tight ${className}`}>
      <span className="pr-2">Social</span>
      <span className="inline-block w-8 h-[2px] bg-gray-900 align-middle mr-2" />
      <span>Auctus</span>
    </div>
  );
}
