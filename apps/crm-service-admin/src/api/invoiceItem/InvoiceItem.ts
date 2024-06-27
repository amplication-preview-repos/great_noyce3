import { Invoice } from "../invoice/Invoice";
import { Product } from "../product/Product";

export type InvoiceItem = {
  createdAt: Date;
  id: string;
  invoice?: Invoice | null;
  price: number | null;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
