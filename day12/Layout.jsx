import Navbar from "../day04/Navbar";
import Footer from "../day11/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
