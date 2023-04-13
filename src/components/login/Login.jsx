import React, { useState } from 'react'
import "./login.css"
import login from "../../assets/login.png"
import { Close, Facebook } from '@material-ui/icons'
import fb from "../../assets/fb.png"
import exit from "../../assets/exit.png"
import { Modal } from '@material-ui/core'
import Register from './register/Register'
export default function Login() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  return (
    <div className="login">
        <div className="topLogin">

        </div>
        <img src={login} alt="" className='loginImg' />
        <div className="topbarLogin">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
        <div className="headbar">
            <div className="leftHead">
                Create Account
            </div>
            <div className="rightHead">
                <span>Already have an account?</span>
                <span className='sign' onClick={handleOpen}>Sign In</span>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Register />

                </Modal>
            </div>
        </div>
       <div className="inputSection">

        <div className="nameInput">

        </div>
        <div className="restBody"></div>
        <input type="text" id='firstname' placeholder='First Name'/>
        <input type="text"  id='lastname' placeholder='Last Name'/>
        <input type="email" id='email' placeholder='Email'/>
        <input type="password" name="" id="pas" placeholder='Password' />
        <input type="password" name="" id="pascf" placeholder='Confirm Password' />
       </div>

        <div className="button"> <span id="buttonText1"> Create Account</span></div>
        <div id="button2"></div>
        <div id="button3"></div>
        <div id="buttonText2">Sign up with Facebook</div>
        <div id="buttonText3">Sign up with Google</div>
        <img src={fb} id='fbIcon' alt="" />
        {/* <Facebook id='fbIcon'/> */}
        <span className="footer">By signing up, you agree to our Terms & conditions, Privacy policy</span>
        {/* <img src={exit}  className='exit' alt="" />
        <Close id="exit"/> */}
    
    </div>
  )
}
