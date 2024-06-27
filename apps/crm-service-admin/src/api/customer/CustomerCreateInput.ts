import { InvoiceCreateNestedManyWithoutCustomersInput } from "./InvoiceCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  email?: string | null;
  invoices?: InvoiceCreateNestedManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
};
