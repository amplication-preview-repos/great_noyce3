import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InvoiceItemUpdateInput = {
  invoice?: InvoiceWhereUniqueInput | null;
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
