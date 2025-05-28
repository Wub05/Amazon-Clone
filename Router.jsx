import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "./src/pages/landing/Landing";
import Signup from "./src/pages/auth/Signup";
import Payment from "./src/pages/payment/Payment";
import Cart from "./src/pages/cart/Cart";
import Orders from "./src/pages/orders/Orders";
import Results from "./src/pages/results/Results";
import ProductDetail from "./src/pages/productDetail/ProductDetail";
import { HashRouter } from "react-router";
const PageRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="*" element="404" /> {/*//404 page*/}
      </Routes>
    </HashRouter>
  );
};

export default PageRouter;
