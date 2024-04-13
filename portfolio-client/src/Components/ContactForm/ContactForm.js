import { useState } from "react";
import axios from "axios";
const baseURL =  process.env.REACT_APP_BASE_URL

const ContactForm = () =>{
    const [name, setName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const messageObject = {
        name:name,
        emailAddress:emailAddress,
        subject:subject,
        message:message
    }

    const handleNameChange = (e) =>{
        setName(e.target.value)
        console.log(name)
    }
    const handleEmailChange = (e) =>{
        setEmailAddress(e.target.value)
        console.log(emailAddress)

    }
    const handleSubjectChange = (e) =>{
        setSubject(e.target.value)
        console.log(subject)

    }
    const handleMessageChange = (e) =>{
        setMessage(e.target.value)
        console.log(message)

    }


    const handleSubmit = async () => {
        try {
          const response = await axios.post(`${baseURL}/users/contact`, messageObject);
          if (response.status === 200) {
            console.log('Email sent successfully');
  

          } else {
            console.error('Email sending failed');
          }
        } catch (error) {
          console.error('Email sending failed:', error);
        }
        console.log(messageObject)

        // setName('')
        // setEmailAddress('')
        // setSubject('')
        // setMessage('')

        // alert('Message sent!');  
    
    };

    const contactSubmitButton = () =>{
        
        return(
            <div id='submit-button' onClick={()=>{handleSubmit()}} className="flex justify-center w-[110px] h-[40px] pt-[6px]  bg-portfolio-red rounded-[10px]">
                <p className="font-awakenning text-white text-[24px] antialiased ">Submit</p>
            </div>
        )
    }
    return(
        <div id='form-button-container' className="w-[100%] max-w-[600px] h-[auto]">
            <div id='contact-form-container' className="w-[100%] max-w-[600px] h-[500px] rounded-[10px] bg-portfolio-grey border-solid border-[1px] border-black p-[10px]">

                <div id='name-field' className="w-[100%] h-[40px] bg-white border-black border-solid border-[1px] rounded-[5px] mb-[25px]">
                    <input type='text' placeholder="Name" value={name} className="w-[100%] h-[100%] text-[24px] pl-[5px] pr-[5px] outline-none rounded-[5px]" onChange={handleNameChange}/>
                </div>
                <div id='email-field' className="w-[100%] h-[40px] bg-white border-black border-solid border-[1px] rounded-[5px] mb-[25px]">
                    <input type='text' placeholder="Email Address" value={emailAddress} className="w-[100%] h-[100%] text-[24px] pl-[5px] pr-[5px] outline-none rounded-[5px]" onChange={handleEmailChange}/>
                </div>
                <div id='subject-field' className="w-[100%] h-[40px] bg-white border-black border-solid border-[1px] rounded-[5px] mb-[25px]">
                    <input type='text' placeholder="Subject" value={subject} className="w-[100%] h-[100%] text-[24px] pl-[5px] pr-[5px] outline-none rounded-[5px]" onChange={handleSubjectChange}/>
                </div>
                <div id='message-field' className="w-[100%] h-[280px] bg-white border-black border-solid border-[1px] rounded-[5px] mb-[25px]">
                    <textarea type='text' placeholder="Message" value={message} className="w-[100%] min-h-[100%] max-h-[100%] text-[24px] pl-[5px] pr-[5px] outline-none rounded-[5px]" onChange={handleMessageChange}/>
                </div>
            </div>
            <div id='cs-button-div' className="flex justify-end pt-[30px] w-[100%] max-w-[600px] h-[auto]">
                {contactSubmitButton(messageObject)}
            </div>
        </div>

    )
}

export default ContactForm;