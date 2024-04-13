//comment

const ProjectCard = (props) => {
    const {project} = props;

    console.log(project)

    const projectCardButton = (url) =>{
        return(
            <div id='project-card-button' className="flex justify-center w-[110px] h-[40px] pt-[9px] mr-[10px] mb-[10px] bg-portfolio-red rounded-[10px]">
                <p className="font-awakenning text-white text-[20px] antialiased ">See Project</p>
            </div>
        )
    }

    return(


        <div id='project-card-container' className="h-[455px] w-[100%] max-w-[345px] mb-[50px]  rounded-[10px] border-solid border-black border-[1px]">
            <div id='pc-div1' className="flex justify-center w-[100%] h-[auto]">
                <div id='project-card-image' className="w-[100%] max-w-[295px] h-[170px] rounded-[5px] m-[20px] bg-portfolio-grey border-solid border-black border-[1px]">
                    <img className='w-[100%] h-[100%] rounded-[5px]' src={project.cardImage}/>
                </div>
            </div>

            <div id='pc-div2' className="w-[100%] h-[190px] ">
                <div id='project-title' className="ml-[20px] mr-[20px]">
                    <p className="leading-none text-[22px] md-lg:text-[32px] font-awakenning antialiased">{project.name}</p>
                </div>
                <div id='project-card-description' className="ml-[20px] mr-[20px]">
                    <p className="text-[16px]">{`${project.description} `}</p>

                </div>
            </div>

            <div id='pc-div3' className="flex justify-end w-[100%] h-[auto]">
                {projectCardButton(project.url)}
            </div>


        </div>

    )
}

export default ProjectCard;