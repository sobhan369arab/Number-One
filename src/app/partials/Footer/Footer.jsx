import DescFooter from "./descFooter"
import ItemsFooter from "./linksFooter"

const Footer = () => {
  return (
    <div >
      {/* Top section in the Footer */}
      <div className="bg-VeryDarkPurple md:py-20 py-10 xl:px-40 lg:px-16 px-8 md:flex justify-between gap-4 cursor-default">
        {/* discription in the Footer */}
          <DescFooter/>   
          <ItemsFooter/>     
      </div>

      {/* Bottom section in the Footer */}
      <div className="bg-DarkPurple py-6 flex justify-around text-TextGray2">
        <span> Privacy Policy |</span>
        <span>@ 2010-2024 skillgro.com.All rights reserved</span>
      </div>
    </div>
  )
}

export default Footer