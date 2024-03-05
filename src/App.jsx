import ProductListPage from "./sections/collections";
import Homepage from "./sections/home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInView from "./sections/sign-in";

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products-list" element={<ProductListPage/>} />
        <Route path="/sign-in" element={<SignInView/>} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;