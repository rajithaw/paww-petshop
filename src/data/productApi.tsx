// A mock function to mimic making an async request for data
export function getProducts(): Promise<any> {
  return fetch("/products.json").then((response) => {
    return response.json();
  });
}
