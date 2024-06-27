import { SortOrder } from "../../util/SortOrder";

export type InvoiceItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  invoiceId?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
