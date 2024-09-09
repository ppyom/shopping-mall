import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header/Header.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';
import ProductPage from './pages/ProductPage/ProductPage.tsx';
import Footer from './components/layouts/Footer/Footer.tsx';
import DetailPage from './pages/DetailPage/DetailPage.tsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="product">
          <Route
            index={true}
            element={<Navigate to="/product/all" replace />}
          />
          <Route path="/product/:id" element={<ProductPage />} />
        </Route>
        <Route path="/product/:category/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
