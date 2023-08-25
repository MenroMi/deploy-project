import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Faq from './Faq';
import Account from './Account';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
