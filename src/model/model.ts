import { DataResorce } from "../services/DataResorce";

export interface PizzaModel {
  id?: number;
  title: string;
  price: number;
  description: string;
  toppings: string[];
}

export const Pizza = new DataResorce<PizzaModel>(
  "http://localhost:3000/pizzas"
);
