/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InvoiceWhereUniqueInput } from "../../invoice/base/InvoiceWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";

@InputType()
class InvoiceItemUpdateInput {
  @ApiProperty({
    required: false,
    type: () => InvoiceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InvoiceWhereUniqueInput)
  @IsOptional()
  @Field(() => InvoiceWhereUniqueInput, {
    nullable: true,
  })
  invoice?: InvoiceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;
}

export { InvoiceItemUpdateInput as InvoiceItemUpdateInput };
