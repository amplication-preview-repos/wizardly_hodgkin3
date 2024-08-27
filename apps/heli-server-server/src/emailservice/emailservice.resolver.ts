import * as graphql from "@nestjs/graphql";
import { FlightRequestInput } from "../emailService/FlightRequestInput";
import { EmailServiceService } from "./emailservice.service";

export class EmailServiceResolver {
  constructor(protected readonly service: EmailServiceService) {}

  @graphql.Mutation(() => String)
  async SubmitFlightRequest(
    @graphql.Args()
    args: FlightRequestInput
  ): Promise<string> {
    return this.service.SubmitFlightRequest(args);
  }
}
