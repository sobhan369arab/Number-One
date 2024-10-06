import { Outlet } from "react-router-dom"
import Header from "../partials/header/Header";
import Footer from "../partials/Footer/Footer";
import { ScrollToTop } from "../common";

const MainLayouts = () => {
  return (
    <div>
      <Header />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayouts