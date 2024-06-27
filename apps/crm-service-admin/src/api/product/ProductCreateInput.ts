import { InvoiceItemCreateNestedManyWithoutProductsInput } from "./InvoiceItemCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  invoiceItems?: InvoiceItemCreateNestedManyWithoutProductsInput;
  name?: string | null;
  price?: number | null;
};
