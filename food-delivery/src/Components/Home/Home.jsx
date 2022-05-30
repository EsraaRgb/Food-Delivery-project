import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Home.module.css'

export default function Home() {

  return (
    <>

        
                <div className={`${style.all} py-3 d-flex flex-column justify-content-center align-items-center `}>
                    <h5 className={`${style.welcome}`} >WELCOME TO</h5>
                    <h2 className={`${style.NAME}`} >FOOD ZONE</h2>
                    <div className={`${style.animationdiv}`}>
                    <p>THE BEST PLACE TO FIND <h6 className={`d-inline text-5`}></h6></p>
                    </div>
                </div>
            

    </>
  )
}
