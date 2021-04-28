import './App.css';
import Profile from './profile';
import image from './ProfilePic.jpeg'
import {Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const fullName="Elizabeth Bennet"
const profession="Mediator"
const bio="Elizabeth Bennet is the protagonist in the 1813 novel Pride and Prejudice by Jane Austen. She is often referred to as Eliza or Lizzy by her friends and family. Elizabeth is the second child in a family of five daughters. Though the circumstances of the time and environment push her to seek a marriage of convenience for economic security, Elizabeth wishes to marry for love.Elizabeth is regarded as the most admirable and endearing of Austen's heroines. She is considered one of the most beloved characters in British literature because of her complexity. Austen herself described Elizabeth as 'as delightful a creature as ever appeared in print.'"
const handleName=()=>{
  return <Alert  variant="dark" style={{width:"40vw" }}>
  {fullName} is a Jane Austen fictional Heroine !!
</Alert>
}



function App() {

  return (
    <div className="App">
     
     <Profile fullName={fullName} bio={bio} profession={profession} HandleName={handleName}>
       <img src={image} />
     </Profile>
          </div>
  );
}

export default App;
