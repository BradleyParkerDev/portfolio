import ContactForm from "../Components/ContactForm/ContactForm";
const ContactPage = (props) =>{

    return(

        <div id='contactpage-container'>

            {/* Contact Content */}
            <div id='contactpage-div1' className="flex justify-center mt-[94px] mb-[30px] w-[100%]  h-[auto] ">
                <div id='cp-div1-inner' className="w-[100%] max-w-[700px]  h-[auto] mr-[20px] ml-[20px] ">
                    <div id='cp-div1-title' className="flex justify-center w-[100%] h-[auto] ">
                        <p className="font-awakenning antialiased text-[32px] md:text-[36px] md-lg:text-[42px] lg:text-[48px] ">Contact</p>
                    </div>
                </div>
            </div>
            {/* Form */}
            <div id='contactpage-div2' className="flex justify-center pl-[20px] pr-[20px] mb-[50px] w-[100%] h-[auto]">
                <ContactForm />
            </div>

        </div>






    )

    
}

export default ContactPage;