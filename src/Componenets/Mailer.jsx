import React,{useRef, useState} from 'react';
import emailjs from '@emailjs/browser'
import { Avatar, Modal } from 'antd';

const Mailer = () => {
    const [isVisible, setIsVisible] = useState(true)
    const hideModal = () => {
        isVisible ? setIsVisible(false) : setIsVisible(true)
    }
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'USER_ID')
       
          .then((result) => {
            
            alert(result.text)



              
          }, (error) => {
              alert(error.text);
          });
      };
    return <div className='form-container'>
       
       <div className='form-header'>
           <Avatar src={<img src='img/fsn.svg' alt='' style={{marginLeft: "0px"}}/>}                           />  
           <p className='token-name'>fusion  <span className='token-symbol'>sfn</span>     </p>
       </div>
       <div className='form-body'>
       <form ref={form} onSubmit={sendEmail}>
     
      <input className='input-boxt' type="text" name="name" placeholder='Your Full Name'/>
      
      <input  className='input-boxt' type="email" name="email" placeholder='Your Email Address'/>
     
      <input  className='input-boxt' type="text" name="address"  placeholder='Your Ethereum Address'/>

      <input  className='input-boxt' type="text" name="twitter" placeholder='Your Twitter Profile'/>
     
      <input  className='input-boxt' type="text" name="retweet" placeholder='Retweet Link'/>
      
      <input   className='send-btn' type="submit" value="Send" />
    </form>

       </div>
    </div>;
}



export default Mailer;