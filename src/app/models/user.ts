export interface User {
  id:          string;
  name:        string;
  lastName:    string;
  phone:       string;
  email:       string;
  dateCreated: Date;
  financeData: FinanceData;
}

export interface FinanceData {
  amount: number;
}
