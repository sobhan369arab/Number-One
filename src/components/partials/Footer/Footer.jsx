import DescFooter from "./descFooter"
import ItemsFooter from "./linksFooter"

const Footer = () => {
  return (
    <div >
      {/* Top section in the Footer */}
      <div className="bg-[#06042E] md:py-20 py-10 xl:px-40 lg:px-16 px-8 md:flex justify-between gap-4 cursor-default">
        {/* discription in the Footer */}
        <DescFooter />
        <ItemsFooter />
      </div>
      {/* Bottom section in the Footer */}
      <div className="bg-[#1C1A4A] py-6 flex justify-around text-neutral-400">
        <span> Privacy Policy |</span>
        <span>@ 2010-2024 skillgro.com.All rights reserved</span>
      </div>
    </div>
  )
}

export default Footer