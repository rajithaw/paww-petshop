import { IProduct } from "./productSlice";

// A mock function to mimic making an async request for data
export function getProducts(): Promise<IProduct[]> {
  return fetch("/products.json").then((response) => {
    return response.json();
  });
}
