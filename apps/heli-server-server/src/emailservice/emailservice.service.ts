import { Injectable } from "@nestjs/common";
import { FlightRequestInput } from "../emailService/FlightRequestInput";

@Injectable()
export class EmailServiceService {
  constructor() {}
  async SubmitFlightRequest(args: FlightRequestInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
