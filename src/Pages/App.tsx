import { BiSolidHome } from "react-icons/bi";
import BreadCrumb from "../Components/General/BreadCrumb";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import PrimaryCard from "../Components/Cards/PrimaryCard";

function App() {
  return (
    <AuthenticatedLayout>
      <div className="w-full flex flex-col min-h-screen ">
        <BreadCrumb>
          {/* Pasaría un listado de url con la finalidad de hacerlo dinamico */}
          <BiSolidHome className="w-10 h-8 text-black" />
        </BreadCrumb>
        <div className="w-full gap-4 flex justify-between items-center">
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
        </div>
        <div className="w-full">
          <h3 className=" font-semibold text-black">Acciones rápidas</h3>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default App;
