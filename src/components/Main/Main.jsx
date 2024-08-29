import React, { useContext, useState } from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import Sidebar from '../Sidebar/Sidebar'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

    return(
        <div className="main">
            <div className="nav">
                <p>Mr. Know</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {!showResult
                ?<>
                <div className="greet">
                    <p><span>Hello, Y'all.</span></p>
                    <p>How can my sigma help?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>What is Skibidi?</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Can you do mewing?</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Do me a rizz maxxingg</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Please make it CAP</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                </>
                :<div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.logo_icon} alt="" />
                        {loading
                            ?<div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
                </div>
                }

                
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Mr. Know may provide information but he also might display inaccurate info.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main