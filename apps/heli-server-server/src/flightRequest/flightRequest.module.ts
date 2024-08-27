import { Module } from "@nestjs/common";
import { FlightRequestModuleBase } from "./base/flightRequest.module.base";
import { FlightRequestService } from "./flightRequest.service";
import { FlightRequestController } from "./flightRequest.controller";
import { FlightRequestResolver } from "./flightRequest.resolver";

@Module({
  imports: [FlightRequestModuleBase],
  controllers: [FlightRequestController],
  providers: [FlightRequestService, FlightRequestResolver],
  exports: [FlightRequestService],
})
export class FlightRequestModule {}
