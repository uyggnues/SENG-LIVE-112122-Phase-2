import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {
    // console.log(projects);

    const projectListItems = projects.map(project => <ProjectListItem key={project.id} project={project}/>);

    return (
        <h3>{projectListItems}</h3>
    );
}

export default ProjectList;

// Props or properties are objects used as arguments to pass data from components from Parent to child - JC definition
// Props are obj-like parameters and are passed down by components from parent to children, 
// whereas state is managed by a single component to track changes on the page - sarah's definition
