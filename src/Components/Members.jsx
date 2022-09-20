// import Array from "./Array"
import Card from "./Card"
import "./Members.css" 

const Members = ({members, onClear, onDelete}) => {
 

  return (
    <div className="container">
      <h1>{ members.length} Birthdays today</h1>
     {members.map((member) => (
        <Card key={member.id} member={member} onDelete={onDelete} />
     ))}
            <button className="btn" onClick={onClear}>Clear All</button>
    </div>
  )
}

export default Members