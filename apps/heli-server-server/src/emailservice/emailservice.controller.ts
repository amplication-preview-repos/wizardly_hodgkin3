import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EmailServiceService } from "./emailservice.service";
import { FlightRequestInput } from "../emailService/FlightRequestInput";

@swagger.ApiTags("emailServices")
@common.Controller("emailServices")
export class EmailServiceController {
  constructor(protected readonly service: EmailServiceService) {}

  @common.Post("/submit-flight-request")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubmitFlightRequest(
    @common.Body()
    body: FlightRequestInput
  ): Promise<string> {
        return this.service.SubmitFlightRequest(body);
      }
}
