import PCard from "./PCard";
import '../styles/ListPCard.css';

function ListPCard(posts) {
  const { list } = posts;


  return (
    <div className="list-p-card">
      {list.map((item, index) => (
        <PCard key={index} {...item} />
      ))}
    </div>
  );
  
}
export default ListPCard;