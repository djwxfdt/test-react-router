import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Expenses from "./expenses";
import Invoices from "./invoices";

const LazyExpenses = React.lazy(() => import("./expenses"));

const App2 = () => {
  return <Routes>
    <Route path="expenses" element={<React.Suspense fallback="loading">
      <LazyExpenses />
    </React.Suspense>} />
    <Route path="invoices" element={<Invoices />} />
  </Routes>
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App2 />} />
      </Routes>
    </BrowserRouter>
)
