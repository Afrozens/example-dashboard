const PrimaryCard = () => {
  return (
    <div className="rounded-[30px] border border-[#D6D5D5] max-w-[214px] max-h-[143px] p-4">
      <h4 className="text-sm font-semibold text-black">Clientes Nuevos</h4>

      <span className="text-4xl text-secondary font-semibold">18</span>
      <div className="flex gap-2 items-center">
        <div className="">+8.2%</div>
        <span className="text-xs text-gray-600 whitespace-pre">
          En el último mes
        </span>
      </div>
    </div>
  );
};

export default PrimaryCard;
