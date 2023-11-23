import {Card} from 'react-bootstrap';
import '../styles/PCard.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function PCard({ author,  id, publishDate, title})
{
    const url = `/detail/${id}`;
    const location = useLocation();

  // Checks if the current URL contains the string "detail"
  const isDetailPage = location.pathname.includes('detail');
    
    return(
        <li id={id} className="post-li"  >
            <Card>
                <Card.Img variant="top" src={author.avatar} className="post-cover__item"/>
                <Card.Body>
                    <Card.Title>{author.name}<br/>
                    </Card.Title>
                    <Card.Text>
                        {title}		
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">published : {publishDate}</small>
                </Card.Footer>
                {!isDetailPage && (
                <Link to={url}>
                <button>Show more</button>
                </Link>)}
            </Card>
        </li>
    )
}

export default PCard;