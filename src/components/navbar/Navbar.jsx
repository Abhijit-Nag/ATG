import React, { useState } from 'react'
import "./navbar.css"
import vector from "../../assets/Vector.png"
import logo from "../../assets/logo.png"
import { ArrowDropDown } from "@material-ui/icons"
import { Modal } from '@material-ui/core'
import Login from '../login/Login'
const Navbar = () => {
  const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='Logo'/>
        <div className="inputNavbar">
        <img src={vector} alt="" className='vector' />
            <input type="text"  className='inputBoxNavbar' placeholder='Search for your favorite groups in ATG'/>
        </div>
        <div className="rightNav">

        <span className='accountCreate' style={{ cursor:"pointer"}} onClick={handleOpen}>Create account</span>
        <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Login />

                </Modal>
        <h3 className='jj'>It's free!</h3>
        {/* <ArrowDropDown/> */}
        {/* <Container></Container> */}
        <ArrowDropDown/>
        </div>
    </div>
  )
}

export default Navbar