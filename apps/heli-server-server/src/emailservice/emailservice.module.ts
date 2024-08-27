import { Module } from "@nestjs/common";
import { EmailServiceService } from "./emailservice.service";
import { EmailServiceController } from "./emailservice.controller";
import { EmailServiceResolver } from "./emailservice.resolver";

@Module({
  controllers: [EmailServiceController],
  providers: [EmailServiceService, EmailServiceResolver],
  exports: [EmailServiceService],
})
export class EmailServiceModule {}
