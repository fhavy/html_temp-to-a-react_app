import './App.css';
import Home from './pages/home';



import Header from './components/header';
import Footer from './components/footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Shop from './pages/shop';
import Blog from './pages/blog';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog' element={<Blog/>} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
