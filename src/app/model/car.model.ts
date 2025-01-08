import { User } from './user.model';

export interface Car {
  id: number;
  model: string;
  make: string;
  year: number;
  price: number;
  description: string;
  vendor: User;
}
