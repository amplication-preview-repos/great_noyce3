import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  invoiceNumber?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
