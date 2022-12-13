// should render once for every object inside "projects"

const ProjectListItem = ({project}) => {

    return (
        <p>{project.name}</p>
    );
}

export default ProjectListItem;