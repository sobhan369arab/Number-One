import { Outlet } from "react-router-dom"
import Header from "../partials/Header/Header";
import Footer from "../partials/Footer/Footer";

const MainLayouts = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayouts