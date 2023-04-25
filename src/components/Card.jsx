import './Card.css';
import { Link, useParams } from "react-router-dom";

function Card(props) {

  let id = useParams().id;

  return (
    <Link to={`/details/${props.id}`}>
        <div className="Card">
            <h5 className='date'>{props.date}</h5>
            <h2 className='title'>{props.title}</h2>
            <h3 className='upvotes'>❤️ {props.upvote_count}</h3>
        </div>
    </Link>
  )
}

export default Card;