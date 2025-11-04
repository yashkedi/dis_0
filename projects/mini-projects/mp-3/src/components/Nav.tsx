import {Link} from "react-router"

export default function Nav(){
    return (
        <nav>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/education`}>Education</Link></li>
                <li><Link to={`/project`}>Project</Link></li>
                <li><Link to={`/references`}>References</Link></li>
                <li><Link to={`/skills`}>Skills</Link></li>
                <li><Link to={`/work`}>Work</Link></li>
            </ul>
        </nav>
    )
}