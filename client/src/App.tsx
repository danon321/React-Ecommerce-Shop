import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products/:id",
      element: <Products />,
    },
    {
      path: "/product/:id",
      element: <Product />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
