/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, FlightRequest as PrismaFlightRequest } from "@prisma/client";

export class FlightRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FlightRequestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.flightRequest.count(args);
  }

  async flightRequests(
    args: Prisma.FlightRequestFindManyArgs
  ): Promise<PrismaFlightRequest[]> {
    return this.prisma.flightRequest.findMany(args);
  }
  async flightRequest(
    args: Prisma.FlightRequestFindUniqueArgs
  ): Promise<PrismaFlightRequest | null> {
    return this.prisma.flightRequest.findUnique(args);
  }
  async createFlightRequest(
    args: Prisma.FlightRequestCreateArgs
  ): Promise<PrismaFlightRequest> {
    return this.prisma.flightRequest.create(args);
  }
  async updateFlightRequest(
    args: Prisma.FlightRequestUpdateArgs
  ): Promise<PrismaFlightRequest> {
    return this.prisma.flightRequest.update(args);
  }
  async deleteFlightRequest(
    args: Prisma.FlightRequestDeleteArgs
  ): Promise<PrismaFlightRequest> {
    return this.prisma.flightRequest.delete(args);
  }
}