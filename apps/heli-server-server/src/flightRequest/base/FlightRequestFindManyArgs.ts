/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FlightRequestWhereInput } from "./FlightRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FlightRequestOrderByInput } from "./FlightRequestOrderByInput";

@ArgsType()
class FlightRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FlightRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FlightRequestWhereInput, { nullable: true })
  @Type(() => FlightRequestWhereInput)
  where?: FlightRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [FlightRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FlightRequestOrderByInput], { nullable: true })
  @Type(() => FlightRequestOrderByInput)
  orderBy?: Array<FlightRequestOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FlightRequestFindManyArgs as FlightRequestFindManyArgs };
