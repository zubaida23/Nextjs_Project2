import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import footerStyle from "./footer.module.css"

const Footer = () => {
  return (
    <>
    <footer className={footerStyle.footer}>
      <div className={footerStyle.div}>
        <div className={footerStyle.food}>
          <div>
            <h1 className={footerStyle.h1}>Coffee Craze</h1>
            <div className={footerStyle.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non minima dignissimos repellendus!</div>
            <div>
              <FaPhone className={footerStyle.faphone}/>
              <div className={footerStyle.p}>(123)406-1816</div>
            </div>
            <div>
              <FaEnvelope className={footerStyle.faenvelope}/>
              <div className={footerStyle.p}>coffecraze@gmail.com</div>
            </div>
          </div>
          <div className={footerStyle.div}>
            <div>
              <h3 className={footerStyle.h3}>Content</h3>
              <ul className={footerStyle.ul}>
                <li className={footerStyle.li}>
                  <a href="" className={footerStyle.a}>Home</a>
                </li>
                <li className={footerStyle.li}>
                  <a href="" className={footerStyle.a}>Menu</a>
                </li>
                <li className={footerStyle.li}>
                  <a href="" className={footerStyle.a}>Service</a>
                </li>
                <li className={footerStyle.li}>
                  <a href="" className={footerStyle.a}>Content</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className={footerStyle.h3}>Working Hours</h3>
            <div>
              <div className={footerStyle.Working}>Saturday-Thursday</div>
              <div>09:00AM - 10:00PM</div>
            </div>
            <div>
              <div  className={footerStyle.Working}>Friday</div>
              <div>03:00AM - 01:00PM</div>
            </div>
          </div>
          <div>
            <h3 className={footerStyle.h3}>Newsletter</h3>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ut reiciendis cum.</div>
            <form className={footerStyle.form}>
              <input type="text" placeholder='your email' className={footerStyle.input} />
              <button className={footerStyle.button}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className={footerStyle.copy}>
        Copyright &copy; Coffee Craze 2024 By Zubaida Khatoon | All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer