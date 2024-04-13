import thumbNailImage from '../../Images/thumbnail-image.png'

const ThumbNail = () =>{

    return(
        <div id='thumbnail-container' className='mr-[20px]'>

            <img src={thumbNailImage} className='w-[150px] h-[90px]' />
        </div>
    )
}

export default ThumbNail;