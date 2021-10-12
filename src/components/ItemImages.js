import ItemImage from './ItemImage'

export default function ItemImages({itemimages, itemids, onChange}){
   let i = -1;
   return (
      itemimages.map(itemimage => {
         i++;
         return <ItemImage key={itemimage} itemimage={itemimage} itemid={itemids[i]} onChange={onChange}/>;
      })
   )
}