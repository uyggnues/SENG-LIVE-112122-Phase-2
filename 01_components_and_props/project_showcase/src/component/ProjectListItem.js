// should render once for every object inside "projects"
import { useState } from "react"
const ProjectListItem = ({id, about, image, link, name, phase}) => {

    const [clapCount, setClapCount] = useState(0)

    const handleClaps = (e) => {
        console.log(e.target);
        setClapCount(clapCount + 1);
    }

    return (
        <li className="card">
            <figure className="image">
                <img src={image} alt={name} />
                <button onClick={handleClaps} className="claps">👏{clapCount}</button>
            </figure>

            <section className="details">
                <h4>{name}</h4>
                <p>{about}</p>
                {link ? (
                    <p>
                        <a href={link}>link</a>
                    </p>
                ) : null}
            </section>

            <footer className="extra">
                <span className="badge blue">Phase {phase}</span>
            </footer>
        </li>
    );
};

export default ProjectListItem;