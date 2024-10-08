export interface UserProduct {
  id:       string;
  userId:   string;
  products: ProductItem[];
}

export interface ProductItem {
  id:     string;
  name?:  string;
  active: boolean;
  record: Record[];
}

export interface Record {
  id:            string;
  dateCreated:   Date;
  currentAmount: number;
  dateClosed:    Date;
  openingAmount: number;
}

export interface StateDto {
  isActive: boolean;
  openingAmount: number;
}
