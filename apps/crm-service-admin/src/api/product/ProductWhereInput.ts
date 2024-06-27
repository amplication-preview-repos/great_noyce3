import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceItemListRelationFilter } from "../invoiceItem/InvoiceItemListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  invoiceItems?: InvoiceItemListRelationFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
