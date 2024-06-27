import { InvoiceItem } from "../invoiceItem/InvoiceItem";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  invoiceItems?: Array<InvoiceItem>;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
