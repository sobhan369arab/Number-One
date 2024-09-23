import { Outlet } from "react-router-dom"
import Header from "../partials/Header/Header";
import Footer from "../partials/Footer/Footer";
import { ScrollToTop } from "../common";

const MainLayouts = () => {
  return (
    <>
      <Header />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayouts