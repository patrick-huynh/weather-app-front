import { MainPage } from './pages/MainPage';
import { HelpPage } from './pages/HelpPage';
import { Header } from './Header';
import { Footer } from './Footer';

import '../styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <div className='app-container'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/help" exact element={<HelpPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  )
}
