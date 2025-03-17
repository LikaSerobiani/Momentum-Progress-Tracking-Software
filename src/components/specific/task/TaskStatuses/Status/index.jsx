export default function Status({ label, color }) {
  return (
    <div
      className="w-[381px] border-none rounded-[10px] p-[15px] text-center"
      style={{ backgroundColor: color }}
    >
      <span className="text-firaGo text-[20px] text-white font-medium leading-[100%]">
        {label}
      </span>
    </div>
  );
}
