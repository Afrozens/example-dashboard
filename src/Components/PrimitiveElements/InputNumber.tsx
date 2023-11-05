import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const InputNumber = () => {
  return (
    <div className="container-element w-4/6 relative flex justify-between items-center gap-10  text-[#626262] text-xs font-semibold px-2">
      Cantidad
      <div className="w-[110px] h-[20px] flex justify-between items-center text-[#626262]">
        <button className="btn-plusminus">
          <AiOutlineMinus className="w-3 h-3" />
        </button>
        <input
          type="text"
          className=" focus:outline-none w-[40px] text-center h-5 border border-[#626262] flex justify-center items-center font-light text-sm  rounded-[5px] "
          value={1}
        />
        <button className="btn-plusminus">
          <AiOutlinePlus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default InputNumber;
