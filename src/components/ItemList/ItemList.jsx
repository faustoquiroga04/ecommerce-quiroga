import { memo } from "react";
import Item from "../Item/Item";
import './ItemList.css'

function ItemList({products}) {
  return (
    <div className="itemList">
      {products.map(product => <Item key={product.id} product={product} />)}
    </div>
  )
}

export default memo(ItemList)