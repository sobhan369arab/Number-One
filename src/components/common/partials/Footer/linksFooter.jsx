import { LinksFooter } from "../../../../core/constants/Footer/footerData"
import { Apps, Link_Item } from "./components"

const ItemsFooter = () => {
  return (
    <div className="md:w-[69%] max-md:mt-6 sm:pl-14 relative ">
      <div className="flex flex-wrap gap-1 justify-between">
        {/* Making each set of Links in the footer */}
        {LinksFooter.map((item, index) => {
          return (
            <Link_Item
              key={index}
              title={item.title}
              links={item.links}
            />
          )
        })}
        <Apps />

      </div>
    </div>
  )
}

export default ItemsFooter