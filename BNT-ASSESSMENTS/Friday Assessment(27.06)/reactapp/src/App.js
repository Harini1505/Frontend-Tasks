// import logo from './logo.svg';
import './App.css';
import TodoApp from "./Components/TodoApp"
import Counter from './Components/Counter';
import Counter10 from './Components/Counter10';
import Checkbox from './Components/Checkbox';
import ControlledInput from './Components/ControlledInput';
import NameList from './Components/NameList';
function App() {
  return (
    <>
    <Counter/>
    <Checkbox/>
    <ControlledInput/>
    <NameList/>
    <TodoApp/>
    <Counter10/>
    </>
  );
}

export default App;
