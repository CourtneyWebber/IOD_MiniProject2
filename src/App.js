import './App.css';
import { NavBar } from './NavBar';
import { Routes, Route } from 'react-router-dom';
import Blog from './Blog';
import About from './About';
import Login from './Login';
import SignUp from './SignUp';
import NewBlog from './NewBlog';
import Forgot from './Forgot';

function App() {
  return (
      <div>
          <NavBar />
          <Routes>
              <Route path="/" element={<Blog />} />
              <Route path="/newblog" element={<NewBlog />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot" element={<Forgot />} />
          </Routes>
      </div>
  );
}

export default App;
