import React, { useEffect, useState } from 'react'
import PersonalDataPage from '../PersonalData/PersonalDataPage';
import './profile.css'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ComingSoon from '../CominSoonPage/ComingSoon';

export default function Profilepg() {
    const Navigate = useNavigate()
    const id = useParams();
    const [chatState, setChatState] = useState(true)
    const [profileState, setProfileState] = useState(false)
    const [strData1, setStrData1] = useState([])
    const [user1, setUser1] = useState()
    const [singleChat, setSingleChat] = useState(true)
    const [viewpage, setViewpage] = useState({
        role: "Profile"
    })
    const userId = id.id

    useEffect(() => {

        axios.get('https://panorbit.in/api/users.json')
            .then(response => {
                console.log("response1===>", response.data.users);
                setStrData1(response.data.users);
            })

    }, [])
    useEffect(() => {
        const logUser = strData1?.filter((item) => {
            return item?.id == userId
        })
        console.log("daaaataaaa===>", logUser);
        setUser1(logUser[0])

    }, [strData1])

    const w3_open = () => {
        document.getElementById("mySidebar").style.display = "block";
    }

    const w3_close = () => {
        document.getElementById("mySidebar").style.display = "none";
    }
    const setChange = () => {
        setChatState(true)
        setProfileState(false)
        w3_close()
    }
    console.log("id=====>", userId);
    console.log("data===>", strData1)

    return (
        <>
            <div className="profileContainer">

                {/* -------navbar----- */}
                <div className="sidenav-container">
                    <div className="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" id="mySidebar">

                        <ul>
                            <li onClick={() => { setViewpage({ role: "Profile" }); w3_close() }}>
                                <p id={viewpage.role === 'Profile' ? 'navElement2' : 'navElement'}>

                                    <span className='title' >Profile</span>
                                </p>
                            </li>
                            <hr id='Underlinestyle' />
                            <li onClick={() => { setViewpage({ role: "Posts" }); w3_close() }}>
                                <p id={viewpage.role === 'Posts' ? 'navElement2' : 'navElement'}>
                                    <span className='title'>Posts</span>
                                </p>
                            </li>
                            <hr id='Underlinestyle' />
                            <li onClick={() => { setViewpage({ role: "Gallery" }); w3_close() }}>
                                <p id={viewpage.role === 'Gallery' ? 'navElement2' : 'navElement'}>
                                    <span className='title'>Gallery</span>
                                </p>
                            </li>
                            <hr id='Underlinestyle' />
                            <li onClick={() => { setViewpage({ role: "ToDo" }); w3_close() }}>
                                <p id={viewpage.role === 'ToDo' ? 'navElement2' : 'navElement'}>
                                    <span className='title'>ToDo</span>
                                </p>
                            </li>
                        </ul>
                        <button class="w3-button w3-teal w3-xlarge w3-hide-large" onClick={w3_close} id="navCloseButton">&#9747;</button>
                    </div>
                {/* -------navbar-End------- */}


                </div>
                <div className="data-container">
                    <div className="w3-main">
                        <div className="w3-teal">

                            <div className="w3-container"  >
                                <button className="w3-button w3-teal w3-xlarge w3-hide-large" id='toggleButton' onClick={w3_open}>&#9776;</button>
                                <p id='topLeftHead'>{viewpage.role}</p>
                                <div className="topRightHead" onClick={() => setProfileState(!profileState)}>
                                    <img className="topRightHead-image" src={user1?.profilepicture}></img>
                                    <p className='topRightHead-name'>{user1?.name}</p>
                                </div>

                            </div>
                            <hr />
                        </div>

                        <div className='contentArea' onClick={setChange} >
                            {/* --------Personal-Page------- */}


                            {viewpage.role === "Profile" ? <PersonalDataPage /> : <ComingSoon />}



                            {/* --------Personal-Page-End------ */}



                        </div>

                        {/* -----------Profile -PopUp---------- */}

                        <div id={profileState === true ? 'profile-popup' : 'display-none'}>
                            <div className='popup-singlecardMain'>
                                <img src={user1?.profilepicture} id='profile-ImgMain2'></img>
                                <p id='popup-mainName'>{user1?.name}</p>
                                <p id='popup-mainName2'>{user1?.email}</p>
                            </div>
                            {strData1?.map((item) =>
                                <>
                                    <span>
                                        <img className="langprofile-image2" src={item.profilepicture}></img>
                                        <span className='landingprofile-name2'>{item.name}</span>
                                    </span><br />
                                </>
                            )}
                            <div className="btncomponent">
                                <button id='logBtn' onClick={() => Navigate('/')}>Sign out</button>
                            </div>
                        </div>

                        {/* -----------Profile -PopUp End---------- */}


                        {/* -----------Chat-PopUp---------- */}
                        {chatState === true ? <>
                            <div id='Chatbtn' className='ChatBtnHead' onClick={() => setChatState(false)}><ModeCommentOutlinedIcon className='iconS' /> <span id='Chattext'>Chats</span><span id='rgtAln'><KeyboardArrowUpOutlinedIcon className='iconS' /></span></div>
                        </> : <>
                            <div className="chatbtn-active" >
                                <div id='ChatHead' onClick={() => setChatState(true)}>
                                    <div className='ChatBtnHead'><ModeCommentOutlinedIcon className='iconS' /> <span id='Chattext'>Chats</span><span id='rgtAln'><KeyboardArrowDownOutlinedIcon className='iconS' /></span></div>
                                </div>
                                <div className="scrollContainer">
                                    {strData1?.map((item) =>
                                        <div onClick={() => setSingleChat(!singleChat)}>
                                            <span>
                                                <img className="langprofile-image3" src={item.profilepicture}></img>
                                                <span className='landingprofile-name3'>{item.name}</span>
                                                <span><FiberManualRecordIcon id="active-icon" /></span>

                                            </span>
                                        </div>
                                    )}

                                </div>

                            </div>

                        </>
                        }


                        <div className={singleChat == false ? "chatbtn-active2" : "display-none"}  >
                            <div id='ChatHead' onClick={() => setChatState(true)}>
                                <div className='ChatBtnHead' onClick={() => setSingleChat(!singleChat)}><img className="langprofile-image4" src='https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg'></img><span id='Chattext2'>Leanne Graham</span><span id='rgtAln2'></span><CloseRoundedIcon className='iconS' /></div>
                            </div>
                        </div>
                        {/* -----------Chat-PopUp-End--------- */}

                    </div>
                </div>

            </div>
        </>
    )
}
