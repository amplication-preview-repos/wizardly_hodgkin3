import { FlightRequest as TFlightRequest } from "../api/flightRequest/FlightRequest";

export const FLIGHTREQUEST_TITLE_FIELD = "wtgCode";

export const FlightRequestTitle = (record: TFlightRequest): string => {
  return record.wtgCode?.toString() || String(record.id);
};
