export interface Drug {
  id: number;
  name: string;
  manufacturer: string;
  price: number;
  expiryDate: string;
  stock: number;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}