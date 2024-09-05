import { Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header/Header.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';
import ProductPage from './pages/ProductPage/ProductPage.tsx';
import Footer from './components/layouts/Footer/Footer.tsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="product" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
