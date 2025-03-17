export default function DepartmentTag({ label }) {
  return (
    <div className="rounded-[15px] py-[5px] px-[9px] flex gap-[10px] bg-pink max-w-[88px] overflow-hidden">
      <span className="font-firaGo font-medium text-[12px] text-white text-center truncate">
        {label}
      </span>
    </div>
  );
}
