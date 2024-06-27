import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceItemListRelationFilter } from "../invoiceItem/InvoiceItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type InvoiceWhereInput = {
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  invoiceItems?: InvoiceItemListRelationFilter;
  invoiceNumber?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
};
