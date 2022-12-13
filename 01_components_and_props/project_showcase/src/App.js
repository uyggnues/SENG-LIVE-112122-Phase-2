//top level component

// camelCase
import Header from "./component/Header";
import ProjectForm from "./component/ProjectForm";
import ProjectList from "./component/ProjectList";

//import project data
// why do we want to import our data here?
  // because we want to make our data available throughout our entire component hierarchy

  //data flow => we want to make sure that our data is available throughout our component hierarchy

import projects from "./projects"

const App = () => {

  // console.log(projects);

  return (
    <>
      <div>PROJECT SHOWCASE</div>
      <Header 

        // firstName, lastName, age => key
        // "louis", "Medina", 32 => objects

        firstName="Louis" 
        lastName="Medina" 
        age={32}
        projects={projects}
        />
      <ProjectForm />
      <ProjectList 
      
      // immutable
      projects={projects}
      />
    </>
  )
}

// import app from "./App"
// import {firstComponent, secondComponent} from "./other component"
export default App;
