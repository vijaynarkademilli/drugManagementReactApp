export interface Drug {
  id: number;
  name: string;
  batchNumber: string;
  expiryDate: string;
  quantity: number;
  price: number;
  amount: number;
  mrp: number;
  gst: number;

}

export interface PaginatedResponse<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}