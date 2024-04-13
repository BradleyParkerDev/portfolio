import bradleyPhoto from '../../Images/Bradley Photo.png'
import hamburger from '../../Images/Hamburger.png'
import reject from '../../Images/reject.png'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
const NavBar = (props) =>{
    const [sideNavWidth, setSideNavWidth] = useState('0px')
    const navigate = useNavigate()

    const openNav = () => {
        setSideNavWidth('100%')
    }

    const closeNav = () => {
        setSideNavWidth('0px')

    }

    const handleNav = (pageName) => {

        navigate(`${pageName}`)
        closeNav()

    }




    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth === 1025) {
                closeNav(); // Close the nav when screen width is 1025px
            }
            // Adjust other side effects based on screen width if needed
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call to handleResize when component mounts
        console.log(window.innerWidth)
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window.innerWidth]);






    return(
        <div>
            {/* Hidden Side Nav */}
            <div id = 'side-nav' style={{width: `${sideNavWidth}`, transition:'0.5s'}} className='top-0 right-0 h-full bg-white z-10 duration-500 overflow-x-hidden fixed '>
                
                {/*
                
                
                Displays Photo, Name, and Reject
                
                Note: Remember to tinker with the antialiasing of the font. 
                It appears different in the browser, than it does in Figma.
                
                */}
                <div id='side-nav-div1'className='mb-[41px] flex font-awakenning antialiased '> 
                    <div id='logo' className='flex min-w-[235px] md:min-w-[275px]'>
                        <div id='nav-photo'>
                            <img className='h-[65px] w-[65px] md:h-[75px] md:w-[75px] ml-[8px] mt-[9px] md:mt-[21px] lg:mt-[29px]' src={bradleyPhoto}/>
                        </div>
                        <div id='nav-name' className=' ml-[23px] mt-[30px] md:mt-[42px] lg:mt-[57px] text-[24px] h-[24px] md:text-[32px] md:h-[32px] '>
                            <p>
                                Bradley Parker
                            </p>
                        </div>                
                    </div>
                    <div id='reject-div' className='flex justify-end w-[100%] mt-[23px] md:mt-[40px] mr-[16px]'>
                        <img className='h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] md:h-[40px] md:w-[40px]' src={reject} onClick={()=>{closeNav()}}/>
                    </div>
                </div>
                <div id='side-nav-div2' style={{fontSize:'32px', lineHeight:'32px'}} className='font-awakenning antialiased flex justify-center h-[36px] w-[100%] mb-[30px] '>
                    <p className=' h-[36px] leading-[36px] ' onClick={()=>{handleNav('/')}}>
                        Home 
                    </p>
                </div>
                <div id='side-nav-div3' style={{fontSize:'32px', lineHeight:'32px'}} className='font-awakenning antialiased flex justify-center h-[36px] w-[100%] mb-[30px] '>
                    <p className=' h-[36px] leading-[36px] ' onClick={()=>{handleNav('/about')}}>
                        About 
                    </p>
                </div>
                <div id='side-nav-div4' style={{fontSize:'32px', lineHeight:'32px'}} className='font-awakenning antialiased flex justify-center h-[36px] w-[100%] mb-[30px] '>
                    <p className=' h-[36px] leading-[36px] ' onClick={()=>{handleNav('/projects')}}>
                        Projects 
                    </p>
                </div>
                <div id='side-nav-div5' style={{fontSize:'32px', lineHeight:'32px'}} className='font-awakenning antialiased flex justify-center h-[36px] w-[100%] mb-[30px] '>
                    <p className=' h-[36px] leading-[36px] ' onClick={()=>{handleNav('/contact')}}>
                        Contact 
                    </p>
                </div>
            </div>



            {/* Visible NavBar */}
            <div id='navbar-container' className="border-black border-dashed border-[1px]  flex font-awakenning antialiased ">
                <div id='logo' className='border-black border-dashed border-[1px] flex min-w-[235px] md:min-w-[275px] w-[375px] pl-[22px]'>
                    <div id='nav-photo'>
                        <img className='border-black border-dashed border-[1px] h-[65px] w-[65px] md:h-[75px] md:w-[75px] ml-[8px] mt-[9px] md:mt-[21px] lg:mt-[29px]' src={bradleyPhoto}  onClick={()=>{handleNav('/')}}/>
                    </div>
                    <div id='nav-name' className='border-black border-dashed border-[1px]  ml-[23px] mt-[30px] md:mt-[42px] lg:mt-[50px] text-[24px] h-[24px] md:text-[32px] md:h-[32px] '  onClick={()=>{handleNav('/')}}>
                        <p>
                            Bradley Parker
                        </p>
                    </div>                
                </div>

                {/*Desktop - Home, About, Projects, and Contact visible */}
                <div id='nav-links-desktop' className='hidden pro:contents '>
                    <div className='flex justify-end w-[100%]  ' style={{fontSize:'32px', lineHeight:'32px'}}>
                        <p className='mr-[36px] mt-[57px] h-[36px] leading-[36px] ' onClick={()=>{handleNav('/')}}>
                            Home 
                        </p>
                        <p className='mr-[27px] mt-[57px] h-[36px] leading-[36px]'  onClick={()=>{handleNav('/about')}}>
                            About 
                        </p>
                        <p className='mr-[27px] mt-[57px] h-[36px] leading-[36px]'  onClick={()=>{handleNav('/projects')}}>
                            Projects 
                        </p>  
                        <p className='mr-[60px] mt-[57px] h-[36px] leading-[36px]'  onClick={()=>{handleNav('/contact')}}>
                            Contact 
                        </p>                      
                    </div>
                </div>
                {/* Mobile and Tablet - Hamburger Menu Button Visible  */}
                <div id='nav-hamburger' className='pro:hidden flex justify-end w-[100%] '>
                    <img className='h-[35px] w-[35px] sm:h-[45px] sm:w-[45px] mr-[18px] mt-[25px] sm:mt-[19px] md:mt-[36px] ' src={hamburger} onClick={()=>{openNav()}}/>

                </div>
            </div>


        </div>

    )
}

export default NavBar;