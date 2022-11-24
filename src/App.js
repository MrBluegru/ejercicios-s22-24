import TodosContainer from "./components/containers/TodoContainer";
import TodoFormContainer from "./components/containers/TodoFormContainer";
import FilterOption from "./components/pure/FilterOption";

function App() {
  return (
    <>
      <TodosContainer />
      <TodoFormContainer />
      <FilterOption />
    </>
  );
}

export default App;
