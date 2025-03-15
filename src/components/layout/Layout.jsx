import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="w-full max-w-[87.5%] m-auto mt-[40px] pb-[152px]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
