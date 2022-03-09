import { DislikeOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import React,{useState, useRef} from 'react';
import Countdown from 'react-countdown';
import Mailer from './Mailer';
const MainView = () => {
    return <div className='main-container'>
        <div className='main-left'>
            <h2 className='leftmain-left-header'> follow us on social media to <br />take part in an <br /> exclusive airdrop</h2>
            <p className='left-desc'>
            <span className='span-header'>Information</span>  <br /> 
    EX is developing the first awareness project in the world. <br /> The steps of this
        development and the upcoming calendar. <br />Powered by smart contracts. <br />
             20 lucky participants will be selected randomly <br />
             to be rewarded. Total <span className='colored'>airdrop pool is $100 worth TUPAN.</span>  
             
            </p>
            <div className='social-container'>
                <div className='social-icon insta'>
                  <InstagramOutlined style={{color: "white", fontSize: "35px"}}/>
                </div>
                <div className='social-icon twitter'>
                    <TwitterOutlined style={{color: "white", fontSize: "35px"}}/>
                </div>
                <div className='social-icon discord'>
                    <img src='img/discord.png' alt=''  className='discord' />
                </div>
                <div className='social-icon discord'>
                    <img src='img/telegram.png' alt=''  className='telegram'/>
                </div>
            </div>
            <Countdown date={Date.now() + 1000000000}  className="timer"/>,
        </div>
      <div div className='main-right'>
      <Mailer />
        </div>
    </div>;
}


export default MainView;