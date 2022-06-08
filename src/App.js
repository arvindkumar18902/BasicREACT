import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/pages/home'
import MockAPI from './components/MockAPI'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/MockAPI" element={<MockAPI />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
