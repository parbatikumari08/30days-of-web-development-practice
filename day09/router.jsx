import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../day03/Home";
import About from "../day05/About";
import Blog from "../day07/Blog";
import Contact from "../day08/Contact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}
