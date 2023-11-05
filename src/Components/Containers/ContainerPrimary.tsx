import { FaMoneyBill } from "react-icons/fa";

interface Props {
  name: string;
}

const ContainerPrimary = ({ name }: Props) => {
  function getRandomImage() {
    return "https://picsum.photos/300/200?random=" + Math.random();
  }
  return (
    <div className="w-full flex items-center gap-2 justify-between ">
      <div className="flex items-center gap-2">
        <img
          src={getRandomImage()}
          alt="image alt"
          className="w-7 h-7 rounded-full"
        />
        <span className="text-black text-xs font-semibold">{name}</span>
      </div>
      {/* Implementaría un DatePicker con estos determinados estilos */}
      <button className="rounded-[10px] border border-secondary flex items-center justify-center text-xs px-[15px] py-[5px] text-secondary font-light h-7">
        20/01/2023
      </button>
      <button className="rounded-[10px] gap-3 flex justify-center items-center py-[5px] font-light px-[10px] bg-secondary text-white whitespace-pre h-7 shadow-lg">
        <FaMoneyBill className="w-4 h-4" />
        100 Bs.
      </button>
    </div>
  );
};

export default ContainerPrimary;
