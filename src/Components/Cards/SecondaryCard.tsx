import { ReactElement } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { titleDataSecondary } from "../../Models/data";

interface Props {
  children: ReactElement | ReactElement[];
  title: titleDataSecondary;
}

const SecondaryCard = ({ children, title }: Props) => {
  return (
    <div className="w-full h-[264px]  border border-[#D6D5D5] px-5 py-4 flex flex-col items-center justify-between rounded-2xl">
      {title && (
        <>
          <header className="mb-1 flex w-full justify-between items-center">
            <div>
              <h4 className="font-semibold">{title}</h4>
              {title === "Clientes" && (
                <span className="text-sm text-gray-500 font-normal">
                  Vista rápida
                </span>
              )}
            </div>
            <button className="hover:opacity-80 transition-all text-black">
              <AiOutlineMenuFold className="w-5 h-5" />
            </button>
          </header>
          <div className="w-full">{children}</div>
        </>
      )}
    </div>
  );
};

export default SecondaryCard;
