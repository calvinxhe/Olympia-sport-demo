import ProductListPage from "./sections/collections";
import Homepage from "./sections/home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products-list" element={<ProductListPage/>} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;