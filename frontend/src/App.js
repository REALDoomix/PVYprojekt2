import React from 'react'
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from './pages/Homepage';
import Articles from './pages/Articles';
import Categories from './pages/Categories';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import ArticleDetail from './components/Article/ArticleDetail';

// initialize apollo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});


function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Header heading='InfoWeb' subheading='Informace pro informatiky' />
        <Navigation />
        <main className='container'>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/categories/:id" element={<Categories />} />
          </Routes>
        </main>
        <Footer />
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
