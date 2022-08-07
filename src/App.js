import logo from './logo.svg';
import PetList from './PetList';
import PetForm from './petForm';
import './App.css';


const pets = ['Joey', 'Look', "Jeny"]
// const petList = pets.map(pet => <div>{pet}</div>)

function App() {
  return (
    <div>
      <PetForm />
    </div>

  );
}

export default App;
