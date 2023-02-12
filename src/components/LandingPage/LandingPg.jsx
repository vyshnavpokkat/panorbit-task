import React, { useEffect, useState } from 'react'
import './landingpg.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function LanDgingPg() {
  
  const [strData, setStrData] = useState()
  const Navigate=useNavigate()
  useEffect(() => {

    axios.get('https://panorbit.in/api/users.json')
      .then(response => {
        console.log("response===>", response.data.users);
        setStrData(response.data.users)
      })

  }, [])



  return (
    <>
      <div className="landing-container">
        <div className="userlist-container">
          <div className="landingHead">
            <p>Select an accound</p>
          </div>
          <div className="landingbody">

            {strData?.map((item) =>
              <>
                <div className="landingAccounts" onClick={()=>Navigate(`/login/${item.id}`)}>
                  <img className="langprofile-image" src={item.profilepicture}></img>
                  <p className='landingprofile-name'>{item.name}</p>
                  <hr />
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </>
  )
}
