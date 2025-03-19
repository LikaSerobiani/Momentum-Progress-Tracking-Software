import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="w-full max-w-[1680px] mx-auto mt-[40px] pb-[152px]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
