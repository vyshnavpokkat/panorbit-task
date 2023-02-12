import React, { useEffect, useState } from 'react'
import './personaldatapage.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function PersonalDataPage() {
    const id = useParams();
    const [strData1, setStrData1] = useState([])
    const [user1, setUser1] = useState()
    const userId = id.id

    useEffect(() => {

        axios.get('https://panorbit.in/api/users.json')
            .then(response => {

                setStrData1(response.data.users);
            })

    }, [])
    useEffect(() => {
        const logUser = strData1?.filter((item) => {
            return item?.id == userId
        })

        setUser1(logUser[0])

    }, [strData1])





    return (
        <>
            <div className="personalContainer">
                <div className="personalContainer-left">
                    <img src={user1?.profilepicture} id='profile-ImgMain'></img>
                    <div className="textArea">
                        <p id='textArea-Name'>{user1?.name}</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='rgtAl'>Username</td>
                                    <td className='seperator'>:</td>
                                    <th className='lfttAl'>{user1?.username}</th>
                                </tr>
                                <tr>
                                    <td className='rgtAl'>E-mail</td>
                                    <td className='seperator'>:</td>
                                    <th className='lfttAl'>{user1?.email}</th>
                                </tr>
                                <tr>
                                    <td className='rgtAl'>Phone</td>
                                    <td className='seperator'>:</td>
                                    <th className='lfttAl'>{user1?.phone}</th>
                                </tr>
                                <tr>
                                    <td className='rgtAl'>Website</td>
                                    <td className='seperator'>:</td>
                                    <th className='lfttAl'>{user1?.website}</th>
                                </tr>
                            </tbody>
                        </table>
                        <hr id='hrStyle1' />
                        <p className='textArea-head'>Company</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='rgtAl'>Name</td>
                                    <td className='seperator'>:</td>
                                    <th className='lfttAl'>{user1?.company.name}</th>
                                </tr>
                                <tr>
                                    <td className='rgtAl'>catchphrase</td>
                                    <td className='seperator'>:</td>
                                    <th className='lfttAl'>{user1?.company.catchPhrase}</th>
                                </tr>
                                <tr>
                                    <td className='rgtAl'>bs</td>
                                    <td className='seperator'>:</td>
                                    <th className='lfttAl'>{user1?.company.bs}</th>
                                </tr>
                                <tr>
                                    <td className='rgtAl'>Website</td>
                                    <td className='seperator'>:</td>
                                    <th className='lfttAl'>{user1?.website}</th>
                                </tr>
                            </tbody>
                        </table>
                        <hr id='hrStyle2' />
                    </div>
                </div>
                <div className="personalContainer-right">
                    <div className="textArea2">
                        <p className='textArea-head2'>Address:</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='rgtAl'>Street</td>
                                    <td className='seperator'>:</td>
                                    <th className='lfttAl'>{user1?.address.street}</th>
                                </tr>
                                <tr>
                                    <td className='rgtAl'>Suit</td>
                                    <td className='seperator'>:</td>
                                    <th className='lfttAl'>{user1?.address.suite}</th>
                                </tr>
                                <tr>
                                    <td className='rgtAl'>City</td>
                                    <td className='seperator'>:</td>
                                    <th className='lfttAl'>{user1?.address.city}</th>
                                </tr>
                                <tr>
                                    <td className='rgtAl'>Zipcode</td>
                                    <td className='seperator'>:</td>
                                    <th className='lfttAl'>{user1?.address.zipcode}</th>
                                </tr>
                            </tbody>
                        </table>
                        <iframe src=
                            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                            id='mapStyle'
                        >
                        </iframe>
                        <div id='mapdata' >
                            <span>Lat:<span className='BoldData'>{user1?.address.geo.lat}</span> </span>
                            <span>Long:<span className='BoldData'>{user1?.address.geo.lng}</span> </span>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
