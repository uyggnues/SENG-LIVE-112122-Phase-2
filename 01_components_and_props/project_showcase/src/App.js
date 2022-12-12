//top level component

import Header from "./component/Header"
import ProjectForm from "./component/ProjectForm"
import ProjectList from "./component/ProjectListItem"

const App = () => {
  return (
    <>
  <div>PROJECT SHOWCASE</div>
    <Header />
    <ProjectForm />
    <ProjectList />
    </>
  );
}

// import app from "./App"
// import {firstComponent, secondComponent} from "./other component"
export default App;
