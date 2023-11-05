import { DataPrimary } from "../../Models/data";

interface Props {
  data: DataPrimary;
}

const PrimaryCard = ({ data }: Props) => {
  return (
    <div className="rounded-[30px] border border-[#D6D5D5] max-w-[214px] max-h-[143px] p-4">
      <h4 className="text-sm font-semibold text-black">{data.title}</h4>

      <span className="text-4xl text-secondary font-semibold">
        {data.total} {data.title === "Ingresos totales" && "Bs"}
      </span>
      <div className="flex gap-2 items-center">
        {/* Esto lo hago por el diseño pero lo ideal sería integrar estas condicionales mediante el porcentaje de la data */}
        <div
          className={`${
            data.title === "Préstamos activos" ? "tag-down" : "tag-up"
          } p-1 text-xs font-semibold rounded-md`}
        >
          +{data.average}%
        </div>
        <span className="text-xs text-gray-600 whitespace-pre">
          En el último mes
        </span>
      </div>
    </div>
  );
};

export default PrimaryCard;
