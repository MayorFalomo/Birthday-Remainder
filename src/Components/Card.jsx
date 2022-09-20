import "./Card.css"
import { FaTimes } from "react-icons/fa";

const Card = ({member, onDelete}) => {
  return (
    <div className='member'>
      <div className="images"><img className="images" src={member.img} alt="img" /></div>
      
      <div className="flexItem">
        <div className="names">
        <h3 className="name">{member.firstName}</h3>
        <p className="age">{member.age}</p>
      </div>
        <FaTimes onClick={() => onDelete(member.id) }/>
        </div>
      </div>
  )
}

export default Card