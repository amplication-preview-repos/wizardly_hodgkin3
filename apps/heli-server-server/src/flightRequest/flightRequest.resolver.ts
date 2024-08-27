import * as graphql from "@nestjs/graphql";
import { FlightRequestResolverBase } from "./base/flightRequest.resolver.base";
import { FlightRequest } from "./base/FlightRequest";
import { FlightRequestService } from "./flightRequest.service";

@graphql.Resolver(() => FlightRequest)
export class FlightRequestResolver extends FlightRequestResolverBase {
  constructor(protected readonly service: FlightRequestService) {
    super(service);
  }
}
