import { FlightRequestWhereInput } from "./FlightRequestWhereInput";
import { FlightRequestOrderByInput } from "./FlightRequestOrderByInput";

export type FlightRequestFindManyArgs = {
  where?: FlightRequestWhereInput;
  orderBy?: Array<FlightRequestOrderByInput>;
  skip?: number;
  take?: number;
};
