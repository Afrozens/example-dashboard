import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const BreadCrumb = ({ children }: Props) => {
  return (
    <ul className="font-bold text-lg mb-4">
      <li className="flex items-center gap-3">
        {children}
        Inicio
      </li>
    </ul>
  );
};

export default BreadCrumb;
