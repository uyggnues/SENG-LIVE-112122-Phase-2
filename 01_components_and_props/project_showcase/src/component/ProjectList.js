import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {
    // console.log(projects);

    const ProjectListItems = projects.map(project => {
        // console.log(project);

        return <ProjectListItem />
    });

    return (
        <h3>{ProjectListItems}</h3>
    );
}

export default ProjectList;