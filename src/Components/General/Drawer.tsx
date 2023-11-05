import { BiSolidHome, BiMoneyWithdraw, BiSolidReport } from "react-icons/bi";
import { MdGroups, MdOutlinePointOfSale, MdSettings } from "react-icons/md";
import { FiMapPin, FiTrendingUp } from "react-icons/fi";
import { FaTruckMoving } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";

const Drawer = () => {
  const drawerOptionsFake = [
    {
      title: "Clientes",
      icon: MdGroups,
      route: "ruta1",
      isDropdown: false,
    },
    {
      title: "Mapa de Clientes",
      icon: FiMapPin,
      route: "ruta1",
      isDropdown: false,
    },
    {
      title: "Monitoreo de Distribuidores",
      icon: FaTruckMoving,
      route: "ruta1",
      isDropdown: false,
    },
    {
      title: "Ventas",
      icon: MdOutlinePointOfSale,
      route: "ruta1",
      isDropdown: false,
    },
    {
      title: "Pedidos",
      icon: BiMoneyWithdraw,
      route: "ruta1",
      isDropdown: false,
    },
    {
      title: "Prestamos",
      icon: CgFileDocument,
      route: "ruta1",
      isDropdown: false,
    },
    {
      title: "Finanzas",
      icon: FiTrendingUp,
      route: "ruta1",
      isDropdown: true,
    },
    {
      title: "Reportes",
      icon: BiSolidReport,
      route: "ruta1",
      isDropdown: true,
    },
    {
      title: "Configuración",
      icon: MdSettings,
      route: "ruta1",
      isDropdown: true,
    },
  ];

  return (
    <ul className="w-full px-4 flex flex-col gap-4">
      <li className="w-full flex gap-5 justify-start items-center p-2 text-black bg-primary rounded-md text-normal font-semibold">
        <BiSolidHome className="w-8 h-6" />
        Inicio
      </li>
      {drawerOptionsFake.map((option, index) => (
        <li key={index}>
          <a
            className={`${
              option.isDropdown ? "justify-between" : " justify-start"
            } drawer-li`}
            href={option.route}
          >
            <option.icon className="w-8 h-6" />
            {option.title}
            {/* Si hubiese una logica determinada no fuese solo pintar un icono sino mas bien una lógica mas abstracta para consolidar un menu en cada li que lo necesite del drawer */}
            {option.isDropdown && (
              <RiArrowDropDownLine className="w-6 h-6 self-end " />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Drawer;
