import { InvoiceUpdateManyWithoutCustomersInput } from "./InvoiceUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  email?: string | null;
  invoices?: InvoiceUpdateManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
};
