import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FlightRequestServiceBase } from "./base/flightRequest.service.base";

@Injectable()
export class FlightRequestService extends FlightRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
