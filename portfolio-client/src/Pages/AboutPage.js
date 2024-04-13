
const AboutPage = () =>{
    const skills = ['HTML','CSS','JavaScript','React','MongoDb','Express','Git','Unix','Python']



    const backgroundInterestsSection = () => {
        return(

            <div id='background-interests' className="lg:mr-[150px] h-[auto] max-w-[555px] w-[100%] mb-[40px] ">
                <div id='bi-title' className="h-[auto] w-[100%] font-awakenning antialiased  text-[22px] sm:text-[24px]">
                    <p>My Background and Interests</p>
                </div>
                <div id='bi-content' className="text-[16px]  ">
                    <p className="text-left leading-[40px]">I like coding, and I enjoy creating applications that people will use.  I began my web development journey after completing a MBA program.   I went to a bootcamp that spanned 14 months; it consisted of 11 months of full-stack development, and 3 months of Python development.  As a hobby, I like to study the Linux operating system, and other programming languages.   I hope to one day create or contribute to an open-source project.  I also have an interest in entrepreneurship.</p>
                </div>
            </div>

        )
    }

    const skillsSection = () => {
        return(

            <div id='skills' className="h-[auto] w-[100%] max-w-[355px]">
                <div id='skills-title' className="h-[auto] w-[100%] font-awakenning  text-[22px] sm:text-[24px]">
                    <p>Skills</p>
                </div>
                <div id='mapped-skills' className=" flex flex-wrap flex-start justify-start">
                    {skills.map((skill) => (
                        <div className="h-[auto] w-[auto] text-[14px] md:text-[20px] bg-portfolio-grey rounded-lg mr-[16px] mt-2 mb-2 p-2">
                            <p className="font-sans font-bold">{skill}</p>
                        </div>
                    ))}
                </div>
            </div> 

        )
    }





    return(
        <div id='aboutpage-container'>

            {/* About Content */}
            <div id='aboutpage-div1' className="flex justify-center mt-[94px] w-[100%]  h-[auto] ">
                <div id='ap-div1-inner' className="w-[100%] max-w-[700px]  h-[auto] mr-[20px] ml-[20px] ">
                    <div id='ap-div1-title' className="flex justify-center w-[100%] h-[auto] ">
                        <p className="font-awakenning antialiased text-[32px] md:text-[36px] md-lg:text-[42px] lg:text-[48px] ">About</p>
                    </div>
                    <div id='ap-div1-summary' className="flex justify-center w-[100%]  h-[auto]  text-[16px] md:text-[24px] mt-[15px] ">
                        <p className="text-center">This section touches on my background, interests, and skills.</p>
                    </div>
                </div>
            </div>
            {/* Background, Interests and Skills Content */}
            <div id='ap-content-container' className="mt-[90px] pr-[20px] pl-[20px] tablet:pl-[60px] lg:pl[0px] lg:justify-center mb-[105px] lg:flex w-[100%] ">
                {backgroundInterestsSection()}
                {skillsSection()}
            </div>
        </div>
    )
}

export default AboutPage;