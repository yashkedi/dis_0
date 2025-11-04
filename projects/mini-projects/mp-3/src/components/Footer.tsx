import { Link } from "react-router";

export default function Footer(){
    return (
        <footer>
            All rights reserved under <Link to={`/credits`}>Credits</Link>&#169;
        </footer>
    )
}