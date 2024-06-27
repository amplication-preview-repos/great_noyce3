import { InvoiceItemUpdateManyWithoutProductsInput } from "./InvoiceItemUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  invoiceItems?: InvoiceItemUpdateManyWithoutProductsInput;
  name?: string | null;
  price?: number | null;
};
