import { StringFilter } from "../../util/StringFilter";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InvoiceItemWhereInput = {
  id?: StringFilter;
  invoice?: InvoiceWhereUniqueInput;
  price?: FloatNullableFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
};
