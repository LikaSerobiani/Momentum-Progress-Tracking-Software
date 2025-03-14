import Logo from "../../assets/images/Hourglass.png";
import Button from "../common/Button";
import Plus from "../common/icons/Plus";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="flex items-center w-full max-w-[87.5%] m-auto py-[30px] justify-between">
        {/* logo */}
        <div className="flex items-center">
          <h1 className="font-fredokaOne text-[31px] text-[#8338EC] leading-[100%] ">
            Momentum
          </h1>
          <img src={Logo} alt="Header Logo" />
        </div>
        {/* buttons */}
        <div className="flex gap-[40px]">
          <Button title="შექმენი ახალი დავალება" variant="primary">
            <Plus color="#FFFFFF" />
          </Button>
          <Button title="შექმენი ახალი დავალება" variant="secondary" />
        </div>
      </div>
    </header>
  );
}
