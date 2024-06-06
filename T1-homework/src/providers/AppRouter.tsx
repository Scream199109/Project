import Home from "pages/home-page/Home";
import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/cart" element={<div>Cart</div>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
