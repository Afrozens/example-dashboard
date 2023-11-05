import { ReactElement, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import Drawer from "../Components/General/Drawer";

interface Props {
  children: ReactElement | ReactElement[];
}

const AuthenticatedLayout = ({ children }: Props) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <section className="flex w-full min-h-screen">
      {/* Drawer or Aside */}
      {isOpenDrawer && (
        <div
          onClick={() => setIsOpenDrawer(!isOpenDrawer)}
          className="w-full fixed top-0 left-0 h-full bg-gray-600 opacity-25 z-10"
        />
      )}
      <aside
        className={`${
          isOpenDrawer ? "flex w-2/4" : "hidden w-0"
        }  md:w-3/12 min-h-screen absolute transition-all bg-secondary md:flex flex-col justify-between items-center py-6 md:gap-3 z-50`}
      >
        {/* Logotype in Aside */}
        <h1 className="text-primary font-semibold text-2xl">
          <b className="text-tertiary">Smart</b>water
        </h1>
        <Drawer />
        {/* Logout in Aside */}
        <button className="rounded-3xl bg-primary text-black justify-between flex items-center text-sm font-semibold px-[20px] py-[10px] mx-auto mb-12 md:mb-0 w-3/5 hover:opacity-80 hover:scale-95 transition-all">
          <FiLogOut className="w-8 h-8" />
          Salir
        </button>
      </aside>

      {/* Section of data */}
      <article className="w-full ml-[25%] md:w-9/12 h-screen bg-primary text-black px-3 py-5">
        <header className="h-16 w-full md:hidden">
          <button
            type="button"
            onClick={() => setIsOpenDrawer(!isOpenDrawer)}
            className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden active:scale-95 transition-all focus:outline-none focus:ring-1"
          >
            <BiMenuAltLeft className="w-8 h-8" />
          </button>
        </header>
        {children}
      </article>
    </section>
  );
};

export default AuthenticatedLayout;
