/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FlightRequest } from "./FlightRequest";
import { FlightRequestCountArgs } from "./FlightRequestCountArgs";
import { FlightRequestFindManyArgs } from "./FlightRequestFindManyArgs";
import { FlightRequestFindUniqueArgs } from "./FlightRequestFindUniqueArgs";
import { CreateFlightRequestArgs } from "./CreateFlightRequestArgs";
import { UpdateFlightRequestArgs } from "./UpdateFlightRequestArgs";
import { DeleteFlightRequestArgs } from "./DeleteFlightRequestArgs";
import { FlightRequestService } from "../flightRequest.service";
@graphql.Resolver(() => FlightRequest)
export class FlightRequestResolverBase {
  constructor(protected readonly service: FlightRequestService) {}

  async _flightRequestsMeta(
    @graphql.Args() args: FlightRequestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FlightRequest])
  async flightRequests(
    @graphql.Args() args: FlightRequestFindManyArgs
  ): Promise<FlightRequest[]> {
    return this.service.flightRequests(args);
  }

  @graphql.Query(() => FlightRequest, { nullable: true })
  async flightRequest(
    @graphql.Args() args: FlightRequestFindUniqueArgs
  ): Promise<FlightRequest | null> {
    const result = await this.service.flightRequest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FlightRequest)
  async createFlightRequest(
    @graphql.Args() args: CreateFlightRequestArgs
  ): Promise<FlightRequest> {
    return await this.service.createFlightRequest({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => FlightRequest)
  async updateFlightRequest(
    @graphql.Args() args: UpdateFlightRequestArgs
  ): Promise<FlightRequest | null> {
    try {
      return await this.service.updateFlightRequest({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FlightRequest)
  async deleteFlightRequest(
    @graphql.Args() args: DeleteFlightRequestArgs
  ): Promise<FlightRequest | null> {
    try {
      return await this.service.deleteFlightRequest(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}