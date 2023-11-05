export type titleDataPrimary =
  | "Clientes nuevos"
  | "Préstamos activos"
  | "Pedidos totales"
  | "Ingresos totales";

export type titleDataSecondary = "Clientes" | "Realizar Pedido" | null;

export interface DataPrimary {
  title: titleDataPrimary;
  total: number | string;
  average: number | string;
}

export interface DataSecondary {}
