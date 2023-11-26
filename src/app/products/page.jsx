import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";

export const metadata = {
  title: "Product CRUD",
};

const Product = {
  id: null,
  title: null,
  price: null,
};

async function getProducts() {
  const res = await fetch("https://65630fb6ee04015769a6c1b6.mockapi.io/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductList() {
  let products = await getProducts();
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddProduct />
      </div>
      <table className="table table-fixed w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className="flex">
                <div className="mr-1">
                  <UpdateProduct {...product} />
                </div>

                <DeleteProduct {...product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
