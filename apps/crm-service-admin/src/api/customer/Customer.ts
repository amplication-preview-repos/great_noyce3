import { Invoice } from "../invoice/Invoice";

export type Customer = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  invoices?: Array<Invoice>;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
