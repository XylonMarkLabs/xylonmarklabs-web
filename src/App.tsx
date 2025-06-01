import React from 'react';
import { Route, Switch } from "wouter";
import Home from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import NotFound from './pages/not-found';
import ScrollToTop from './ScrollTop'; 

function App() {
  return (
    <>
      <ScrollToTop /> 
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
