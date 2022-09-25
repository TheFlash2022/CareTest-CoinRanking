import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';
import { TableCoin } from './components/tableCoin';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      }
    }
  });
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <TableCoin />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
