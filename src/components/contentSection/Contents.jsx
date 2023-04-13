import React from 'react'
import Card from '../cards/Card'
import "./contents.css"
import { Edit, ErrorOutlineOutlined, LocationOn } from '@material-ui/icons'

const Contents = () => {
    return (
        <div className="contents">
            <div className="leftContents">
                <Card />
            </div>
            <div className="rightContents">
                <div className="inputContent">
                    <LocationOn />
                    <input type="text" placeholder=' Noida, India' className='locationInput' />
                    <Edit />
                </div>
                <span className="attached">
                    <ErrorOutlineOutlined style={{opacity: "0.5", marginRight:"10px"}}/>
                    <h2 className='textCont'>Your location will help us serve better and extend a personalised experience.</h2>
                </span>
            </div>
        </div>
    )
}

export default Contents