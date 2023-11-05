import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const BreadCrumb = ({ children }: Props) => {
  return (
    <div className="font-bold text-lg">
      {children}
      Inicio
    </div>
  );
};

export default BreadCrumb;
