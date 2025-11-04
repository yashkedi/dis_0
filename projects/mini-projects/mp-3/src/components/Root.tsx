import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import {Routes} from "react-router"
import { Route } from "react-router";
import Home from "./mains/Home.tsx"
import Education from "./mains/Education.tsx";
import References from "./mains/References.tsx";
import Skills from "./mains/Skills.tsx";
import Work from "./mains/Work.tsx";
import Credits from "./mains/Credits.tsx";
import Project from "./mains/Project.tsx";

export default function Root(){
    return (
        <>
            <Header/>
            <Nav/>
            <Routes>
                <Route path={`/`} element={<Home/>}/>
                <Route path={`/education`} element={<Education/>}/>
                <Route path={`/project`} element={<Project/>}/>
                <Route path={`/references`} element={<References/>}/>
                <Route path={`/skills`} element={<Skills/>}/>
                <Route path={`/work`} element={<Work/>}/>
                <Route path={`/credits`} element={<Credits/>}/>
            </Routes>
            <Footer/>
        </>
    )
}