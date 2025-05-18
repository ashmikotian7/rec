import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

function App() {
  const linkStyle = ({ isActive }) => ({
    margin: '0 15px',
    padding: '10px 20px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: isActive ? '2px solid #007BFF' : '2px solid transparent',
    backgroundColor: isActive ? '#007BFF' : 'transparent',
    color: isActive ? '#fff' : '#333',
    transition: 'all 0.3s ease',
  });

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', 
      width: '100vw',
      fontFamily: 'Arial, sans-serif', 
      backgroundColor: '#fafafa',
    }}>
      
      {/* Header Navbar */}
      <header style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        padding: '20px 0',
        textAlign: 'center',
      }}>
        <nav>
          <NavLink to="/home" style={linkStyle} end>Home</NavLink>
          <NavLink to="/about" style={linkStyle}>About</NavLink>
          <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        overflow: 'auto',
        padding: '20px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1200px', 
          padding: '20px',
          boxSizing: 'border-box',
        }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#ffffff',
        textAlign: 'center',
        padding: '15px 0',
        fontSize: '0.9rem',
        color: '#888',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.05)',
      }}>
        &copy; {new Date().getFullYear()} Our Company. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
