import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import './index.css';
import Header from "./routes/header";
import Body from "./routes/body";
import Footer from "./routes/footer";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="Body" element={<Body />} />
      <Route path="Footer" element={<Footer />} />
    </Routes>
  </BrowserRouter>
);