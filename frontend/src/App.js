import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScrenn from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";


function App() {
  return (
    <Router>
      <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' exact element={<HomeScrenn/>} />
              <Route path='/product/:id/' element={<ProductScreen/>} />
            </Routes>
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
