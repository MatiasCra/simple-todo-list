import TaskContextProvider from "./contexts/TaskContext";
import Navbar from "./components/Navbar";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
        <NewTaskForm />
        <TaskList />
      </TaskContextProvider>
    </div>
  );
}

export default App;
