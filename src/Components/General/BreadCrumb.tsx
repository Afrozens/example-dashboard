import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const BreadCrumb = ({ children }: Props) => {
  return (
    <ul className="font-bold text-lg">
      <li className="cursor-pointer hover:opacity-80 transition-all flex items-center gap-3">
        {children}
        Inicio
      </li>
    </ul>
  );
};

export default BreadCrumb;
