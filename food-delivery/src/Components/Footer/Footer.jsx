import React from 'react'

export default function Footer() {
  return (
    
    <>
    <div className={`bg-info position-fixed start-0 bottom-0 end-0  text-center`} >
        <div className='w-75 m-auto py-2'>
            <div className={`row justify-content-around `}>
                <h5 className='col-md-2'>HOME</h5>
                <h5 className='col-md-2'>BRANCHES</h5>
                <h5 className='col-md-4'>CUSTOMER SERVICE</h5>
                <h5 className='col-md-2'>CONTACTS</h5>
                <h5 className='col-md-2'>PRIVACY POLICY</h5>
            </div>
        </div>
        <div>
        <i className="fa-brands fa-facebook px-3"></i>
        <i className="fa-brands fa-instagram "></i>
        <i className="fa-brands fa-youtube px-3 " ></i>
        </div>
        <div className='py-2'>
            <span >© 2022 our restaurant's </span>
        </div>
        <div className='py-2'>
            <span>Web Development by US</span>
        </div>
    </div>
    </>
  )
}
