import ProjectListItem from "./ProjectListItem";
import { useState } from "react"

const ProjectList = ({ projects }) => {
    // console.log(projects);

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch =(e) => {
        setSearchQuery(e.target.value);
    }

    const filteredListItem = projects.filter(project => {
        return project.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const projectListItems = filteredListItem.map((project) => (
    <ProjectListItem 
    key={project.id} 
    {...project} 
    />
    ));

    return (
        <section>
            <h2>Projects</h2>
            <div className="filter">
                <button>All</button>
                <button>Phase 5</button>
                <button>Phase 4</button>
                <button>Phase 3</button>
                <button>Phase 2</button>
                <button>Phase 1</button>
            </div>
            <input onChange={handleSearch} type="text" placeholder="Search..."/>

            <ul className="cards">{projectListItems}</ul>
        </section>
    );
}

export default ProjectList;

// Props or properties are objects used as arguments to pass data from components from Parent to child - JC definition
// Props are obj-like parameters and are passed down by components from parent to children, 
// whereas state is managed by a single component to track changes on the page - sarah's definition
