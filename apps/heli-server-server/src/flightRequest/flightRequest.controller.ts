import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FlightRequestService } from "./flightRequest.service";
import { FlightRequestControllerBase } from "./base/flightRequest.controller.base";

@swagger.ApiTags("flightRequests")
@common.Controller("flightRequests")
export class FlightRequestController extends FlightRequestControllerBase {
  constructor(protected readonly service: FlightRequestService) {
    super(service);
  }
}
