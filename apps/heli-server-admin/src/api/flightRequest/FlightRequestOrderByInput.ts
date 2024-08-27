import { SortOrder } from "../../util/SortOrder";

export type FlightRequestOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
  windTurbineStatus?: SortOrder;
  wtgCode?: SortOrder;
};
