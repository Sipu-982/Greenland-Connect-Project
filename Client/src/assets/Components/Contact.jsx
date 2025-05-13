import React, { useState } from 'react'
import { Element } from 'react-scroll'
import { MdLocationCity,MdPermPhoneMsg} from "react-icons/md";
import { TbMailOpenedFilled } from "react-icons/tb";
import axios from 'axios'
import "./Contact.css"
const Contact = () => {
const [fullname,setFullname]= useState("")
const [email,setEmail]= useState("")
const [phone,setPhone] = useState("")
const [message,setMessage] =useState("")

// const hanleValidate = ()=>{
//   if(!fullname.trim() || !email.trim() || !phone.trim() || !message.trim()){
//     return alert("All fields are required!")
//   }
// }
const handleSubmit = async(e)=>{
  e.preventDefault()
  try {
    const response= await axios.post("http://localhost:3000/api/contact/submitData",{
      fullname,email,phone,message
    })
    alert(response.data.message)
    setFullname('')
    setEmail('')
    setPhone('')
    setMessage('')
  } catch (error) {
    alert(error.response?.data?.message || "Something went wrong!");  
    }
  }

  return (
     <Element name="contact">
              <section className='w-full min-h-[80vh] bg-green-50'>
              <div className="w-full min-h-[500px] bg-green-950">
               <div className="pt-4 text-center"><h2 className='text-3xl text-green-200'>GET IN TOUCH</h2></div>
              <div className="flex flex-wrap justify-center items-center py-[80px] gap-x-[50px]">
                
                <div className='w-[350px] h-[400px] flex flex-col gap-y-3.5  items-center text-center'>
                  <span><MdLocationCity className='p-3 rounded-full bg-neutral-50 text-6xl text-neutral-500' /></span>
                  <h2 className='text-2xl text-green-300 font-semibold'>Location</h2>
                  <p className='text-xl text-white italic'>Prakruthi Vihar,751003</p>
                  <p className='text-xl text-white italic'>Bhubaneswar,Odisha,India</p>
                </div>

                <div className='w-[350px] h-[400px] flex flex-col gap-y-3.5  items-center text-center'>
              <span><MdPermPhoneMsg className='p-3 rounded-full bg-neutral-50 text-6xl text-neutral-500' /></span>
              <h2 className='text-2xl text-green-300 font-semibold'>Contact</h2>     
              <h2 className='text-xl text-black'>Whatsapp Number</h2>
              <p className='text-xl text-white'>+91 982 7505 917</p>
              <h2 className='text-black text-xl'>Phone Number</h2>
              <p className='text-xl text-white'>+91 732 5985 461</p>
                </div>

                <div className='w-[350px] h-[400px] flex flex-col gap-y-3.5  items-center text-center'>
                 <span><TbMailOpenedFilled className='p-3 rounded-full bg-neutral-50 text-6xl text-neutral-500' /></span>
                 <h2 className='text-2xl text-green-300 font-semibold'>Email</h2>
                 <p className='text-xl text-white'>sipusagar982@gmail.com</p>
                 <p className='text-xl text-white'>sipurana344@gmail.com</p>
                </div>
              </div>
              </div>
      <div className="flex justify-center flex-wrap gap-x-[50px] py-4 px-7">
    <div className="">
    <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d479308.38114518044!2d86.4585183081543!3d20.192509712389608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1746357080382!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="contact-form">
     <form action="" onSubmit={handleSubmit}>
      <div className="form-field">
        <input type="text" name="fullname" id="fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)} placeholder='Enter fullname' />
      </div>
      <div className="form-field">
      <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' />
      </div>
      <div className="form-field">
        <input type="phone" name="phone" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter Phone Number'/>
      </div>
      <div className="form-field">
        <textarea name="msg" id="msg" cols="55" rows="5" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Enter message...'></textarea>
</div>
      <div className="form-field">
        <button type="submit" className='p-2  bg-green-500 text-white text-md rounded cursor-pointer w-25'>Submit</button>
      </div>
     </form>
    </div>
    </div>
  </section>
      </Element>  
)
}

export default Contact