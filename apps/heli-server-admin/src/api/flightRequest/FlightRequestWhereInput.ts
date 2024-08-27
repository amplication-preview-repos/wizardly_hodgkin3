import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FlightRequestWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  time?: DateTimeNullableFilter;
  windTurbineStatus?: "Option1";
  wtgCode?: StringNullableFilter;
};
