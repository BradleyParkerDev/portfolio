
import ThumbNail from "../Components/ThumbNail/ThumbNail";
import { useState } from "react";

const DescriptionPage = () =>{
    const [thumbNails, setThumbNails] = useState([1,2,3,4,5])




    return(
        <div id="description-outer-container"  className="border-black border-dashed border-[1px] w-screen h-[auto] flex justify-center mt-[75px] pl-[20px] pr-[20px]">

            <div id="description-contents-container" className="border-black border-dashed border-[1px]  w-[100%] max-w-[725px]">
                <div id="div-1" className="border-black border-dashed border-[1px] w-[100%] min-h-[200px] h-[auto]">
                    <div id='project-description-title' className="border-black border-dashed border-[1px] w-[100%] min-h-[55px]">
                        <p  className="font-awakenning antialiased ">Project Title</p>
                    </div>
                    <div id='project-description-image' className="border-black border-dashed border-[1px] w-[100%] min-h-[145px]">

                    </div>
                </div>
                <div id="div-2" className="border-black border-dashed border-[1px] w-[100%] min-h-[130px] h-[auto]">
                    <div id='video-walkthrough-text' className="border-black border-dashed border-[1px] w-[100%] h-[50%]">
                        <p className="font-awakenning antialiased ">Video Walkthroughs</p>
                    </div>
                    <div style={{overflowX:'scroll'}} id='video-walkthrough-thumbnails' className="border-black border-dashed border-[1px] w-[100%] h-[50%] flex overflow-x-scroll">
                        {thumbNails.map(thumbNail=>(<ThumbNail />))}


                    </div>

                </div>
                <div id="div-3" className="border-black border-dashed border-[1px] w-[100%] min-h-[200px] h-[auto]">
                    <div id='description-title' className="border-black border-dashed border-[1px] w-[100%] h-[50%]">
                        <p className="font-awakenning antialiased ">Description</p>
                    </div>
                    <div id='description-text' className="border-black border-dashed border-[1px] w-[100%] h-[50%]">

                    </div>

                </div>

            </div>
        </div>
    )

}

export default DescriptionPage;