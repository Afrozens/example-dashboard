import { BiSolidHome } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import BreadCrumb from "../Components/General/BreadCrumb";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import PrimaryCard from "../Components/Cards/PrimaryCard";
import { DataPrimary } from "../Models/data";
import SecondaryCard from "../Components/Cards/SecondaryCard";
import ContainerPrimary from "../Components/Containers/ContainerPrimary";
import Dropdown from "../Components/PrimitiveElements/Dropdown";
import InputNumber from "../Components/PrimitiveElements/InputNumber";
import InputPrice from "../Components/PrimitiveElements/InputPrice";
import VerticalBar from "../Components/Charts/VerticalBar";

function App() {
  const dataPrimaryFake: DataPrimary[] = [
    {
      title: "Clientes nuevos",
      total: 18,
      average: Math.random().toFixed(2),
    },
    {
      title: "Préstamos activos",
      total: 25,
      average: Math.random().toFixed(2),
    },
    {
      title: "Pedidos totales",
      total: 1.236,
      average: Math.random().toFixed(2),
    },
    {
      title: "Ingresos totales",
      total: 1.783,
      average: Math.random().toFixed(2),
    },
  ];

  const namesFake = [
    {
      name: "Daniela Ayala",
    },
    {
      name: "Rubén González",
    },
    {
      name: "Mariana Reyes",
    },
    {
      name: "Julio Espinoza",
    },
  ];

  return (
    <AuthenticatedLayout>
      <div className="w-full flex flex-col min-h-screen ">
        {/* Header with breadcrumb and notifications */}
        <header className=" mb-4 flex justify-between items-center">
          <BreadCrumb>
            {/* Pasaría un listado de url con la finalidad de hacerlo dinamico */}
            <BiSolidHome className="w-10 h-8 text-black" />
          </BreadCrumb>
          <button className="w-10 relative flex items-center justify-center h-10 rounded-full bg-secondary cursor-pointer hover:opacity-80 hover:scale-95 transition-all">
            <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-1" />
            <IoMdNotifications className="w-8 h-8 text-white" />
          </button>
        </header>

        {/* Primary data section */}
        <div className="px-1 grid grid-cols-2 place-item-center w-full mb-4 lg:flex justify-between items-center">
          {dataPrimaryFake.map((data, index) => (
            <PrimaryCard key={index} data={data} />
          ))}
        </div>

        {/* Secondary data section */}
        <div className="px-1 w-full flex gap-5 flex-col ">
          <h3 className=" font-semibold text-xl text-black">
            Acciones rápidas
          </h3>
          <div className="w-full flex flex-col lg:flex-row gap-5 items-center">
            <SecondaryCard title="Clientes">
              <div className="w-full flex flex-col gap-4">
                {namesFake.map(({ name }, index) => (
                  <ContainerPrimary key={index} name={name} />
                ))}
              </div>
            </SecondaryCard>
            <SecondaryCard title="Realizar Pedido">
              <div className="flex flex-col gap-4 items-center justify-center">
                <Dropdown title="Cliente" />
                <Dropdown title="Botellon de 20 Lts" />
                <div className="flex justify-between items-center w-full gap-5">
                  <InputNumber />
                  <InputPrice />
                </div>
                <button className="w-[166px] font-semibold hover:opacity-80 hover:scale-95 transition-all h-[40px] bg-tertiary text-primary rounded-[30px] shadow-md self-end ml-auto">
                  Realizar pedido
                </button>
              </div>
            </SecondaryCard>
          </div>
        </div>

        {/* Tertiary data section */}
        <div className=" h-96 py-4 px-14 my-7 border  rounded-xl">
          <VerticalBar />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default App;
