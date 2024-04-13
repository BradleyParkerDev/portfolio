import ProjectCard from "../Components/ProjectCard/ProjectCard"
import financialCalculatorScreenshot from '../Images/Finanial-Calculator-Screenshot.gif'
const ProjectsPage = (props) =>{

    const projects = [

        {
            name: 'News App',
            projectType: "Fullstack",
            cardImage:``,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            gitHubRepo: '',
            url:'News App'
        },
        {
            name: 'Todo List',
            projectType: "",
            cardImage:``,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            gitHubRepo: '',
            url:'Todo List'
        },


        {
            name: 'Chat App',
            projectType: "",
            cardImage:``,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            gitHubRepo: '',
            url:'Chat App'
        },
        {
            name: 'Dog Social App',
            projectType: "",
            cardImage:``,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            gitHubRepo: '',
            url:'Dog Social App'
        },
        {
            name: 'AI CSS, HTML, Javascript Generator',
            projectType: "",
            cardImage:``,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            gitHubRepo: '',
            url:'AI CSS, HTML, Javascript Generator'
        },   
        
        {
            name: 'Flask Backend',
            projectType: "",
            cardImage:``,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            gitHubRepo: '',
            url:'Django Backend'
        }, 
    ]








    const showProjects = (projects) =>{
        return(
            projects.map(project=>(<ProjectCard project={project}/>))
        )
    }





    return(
        <div id='projectspage-container'>

            {/* About Content */}
            <div id='projectspage-div1' className="flex justify-center mt-[94px] w-[100%]  h-[auto] ">
                <div id='pp-div1-inner' className="w-[100%] max-w-[615px]  h-[auto] mr-[20px] ml-[20px] ">
                    <div id='pp-div1-title' className="flex justify-center w-[100%] h-[auto] ">
                        <p className="font-awakenning antialiased text-[32px] md:text-[36px] md-lg:text-[42px] lg:text-[48px] ">Projects</p>
                    </div>
                    <div id='pp-div1-summary' className="flex justify-center w-[100%]  h-[auto]  text-[16px] md:text-[24px] mt-[15px] ">
                        <p className="text-center">Here are a few of my projects.  Click the red buttons to view them in action.</p>
                    </div>
                </div>
            </div>

            <div  id='projectspage-content-container-outer' className="flex justify-center mt-[40px] md-lg:mt-[70px] w-[100%] h-[auto] ">
                <div id='projectspage-content-container-inner' className="flex flex-wrap justify-evenly pl-[10px] pr-[10px] mb-[50px] w-[100%] max-w-[1330px] h-[auto] ">
                    {showProjects(projects)}
                </div>                
            </div>


        </div>
    )
}

export default ProjectsPage;