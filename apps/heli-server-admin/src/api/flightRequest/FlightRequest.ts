export type FlightRequest = {
  createdAt: Date;
  date: Date | null;
  id: string;
  time: Date | null;
  updatedAt: Date;
  windTurbineStatus?: "Option1" | null;
  wtgCode: string | null;
};
