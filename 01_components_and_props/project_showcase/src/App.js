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
  return (
      <div className="App">
      <Header />
      <ProjectForm />
      <ProjectList projects={projects} />
      </div>
  )
}

export default App;
