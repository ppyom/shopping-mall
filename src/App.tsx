import { Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header/Header.tsx';
import MainPage from './pages/MainPage/MainPage.tsx';
import Footer from './components/layouts/Footer/Footer.tsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index={true} element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
