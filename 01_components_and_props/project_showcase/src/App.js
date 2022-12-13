//top level component

// camelCase
import Header from "./component/Header";
import ProjectForm from "./component/ProjectForm";
import ProjectList from "./component/ProjectList";
// import ProjectListItem from "./component/ProjectListItem";

const App = () => {
  return (
    <>
      <div>PROJECT SHOWCASE</div>
      <Header 
        firstName="Louis" 
        lastName="Medina" 
        age={32}
        />
      <ProjectForm />
      <ProjectList />
    </>
  )
}

// import app from "./App"
// import {firstComponent, secondComponent} from "./other component"
export default App;
