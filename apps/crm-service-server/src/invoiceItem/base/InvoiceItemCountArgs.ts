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
import { InvoiceItemWhereInput } from "./InvoiceItemWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class InvoiceItemCountArgs {
  @ApiProperty({
    required: false,
    type: () => InvoiceItemWhereInput,
  })
  @Field(() => InvoiceItemWhereInput, { nullable: true })
  @Type(() => InvoiceItemWhereInput)
  where?: InvoiceItemWhereInput;
}

export { InvoiceItemCountArgs as InvoiceItemCountArgs };