import { RiArrowDropDownLine } from "react-icons/ri";

interface Props {
  title: string;
}

const Dropdown = ({ title }: Props) => {
  return (
    // De manera 'estatica' está este dropdown pero la idea es generarle toda la logica necesaria
    <div className="container-element flex justify-between items-center text-[#626262] text-xs font-semibold px-2">
      {title}
      <RiArrowDropDownLine className="w-8 h-8 text-black" />
    </div>
  );
};

export default Dropdown;
