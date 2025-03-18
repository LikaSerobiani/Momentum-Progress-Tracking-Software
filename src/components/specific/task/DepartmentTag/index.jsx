export default function DepartmentTag({ label, textSize = "text-[12px]" }) {
  return (
    <div className="rounded-[15px] py-[5px] px-[9px] flex gap-[10px] items-center justify-center bg-pink max-w-[88px] overflow-hidden">
      <span
        className={`font-firaGo font-medium ${textSize} text-white text-center truncate`}
      >
        {label}
      </span>
    </div>
  );
}
