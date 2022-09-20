import './App.css';
import {useState} from "react"
import  "./Components/Card";
import Members from "./Components/Members"


import imageOne from "./Components/images/personOne.jpg"
import imageTwo from "./Components/images/personTwo.jpg"
import imageThree from "./Components/images/personThree.jpg"
import imageFour from "./Components/images/personOne.jpg"
import imageFive from "./Components/images/personTwo.jpg"


const App = () => {

   const [members, setMembers] = useState([
    {
    id: 1,
    img: imageOne,
    firstName: "Bernie Yates",
    age: "29 years" 
  },
  {
    id: 2,
    img: imageTwo,
    firstName: "Hester Hogan",
    age: "32 years"
  },
  {
    id: 3,
    img: imageThree,
    firstName: "Elene Bates",
    age: "36 years"
  },
  {
    id: 4,
    img: imageFour,
    firstName: "Sean Walsh",
    age: "34 years"
  },
  {
    id: 5,
    img: imageFive,
    firstName: "Lola Gardner",
    age: "29 years"
  },
])

  // clear Members Birthday
  const clearAllMembers = () => {
    setMembers([])
  }

  // Delete all members Birthday
  const deleteMembers = (id) => {
    setMembers(members.filter((member) => member.id !== id))
  }
  
  return (
    <div className="App">
      <Members members={members} onClear={clearAllMembers} onDelete={deleteMembers} />
    </div>
  ); 
}

export default App;
