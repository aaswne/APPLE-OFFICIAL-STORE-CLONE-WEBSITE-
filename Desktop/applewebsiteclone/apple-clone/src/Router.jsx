import { Routes, Route } from "react-router-dom";
import App from "./App";
import Bag from "./pages/bag/Bag";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/bag" element={<Bag />} />
    </Routes>
  );
}
