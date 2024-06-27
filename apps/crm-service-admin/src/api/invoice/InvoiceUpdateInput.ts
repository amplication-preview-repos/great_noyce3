import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceItemUpdateManyWithoutInvoicesInput } from "./InvoiceItemUpdateManyWithoutInvoicesInput";

export type InvoiceUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  invoiceItems?: InvoiceItemUpdateManyWithoutInvoicesInput;
  invoiceNumber?: string | null;
  totalAmount?: number | null;
};
