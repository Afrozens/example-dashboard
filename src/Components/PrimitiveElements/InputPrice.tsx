const InputPrice = () => {
  return (
    <div className="h-[38px] w-2/6 relative">
      <input
        type="text"
        className="w-full focus:outline-none border border-[#626262] rounded-md h-full pl-3 text-xs text-[#626262] font-semibold"
        value={15}
      />
      <div className="absolute inset-y-0 right-0 flex items-center  border border-[#626262] rounded-md text-xs font-semibold text-[#626262] justify-center text-center w-10 rounded-l-none ">
        Bs.
      </div>
    </div>
  );
};

export default InputPrice;
