export default function PriorityTag({ label, icon, textSize = "text-[12px]" }) {
  return (
    <div className="rounded-[5px] border-[0.5px] p-[4px] gap-[4px] bg-white flex">
      <div className="flex gap-x-1 items-center justify-center">
        <img src={icon} alt={label} />
        <span className={`text-firaGo ${textSize} leading-[150%] font-medium`}>
          {label}
        </span>
      </div>
    </div>
  );
}
