import ItemImage from './ItemImage'

export default function ItemImages({itemimages, itemlabels, itemids, onChange}){
   let i = -1;
   console.log(itemlabels);
   return (
      itemimages.map(itemimage => {
         i++;
         return <ItemImage key={itemimage} itemlabel={itemlabels[i]} itemimage={itemimage} itemid={itemids[i]} onChange={onChange} />;
      })
   )
}