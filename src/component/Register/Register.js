import React from 'react'
import { Link, useHistory } from 'react-router-dom'
// import useForm from './useForm'
// import axios from 'axios'

import HomeMain from '../Home-Main/HomeMain'
import Footer from '../Footer/Footer'

function Register() {
  const history = useHistory()
  const [value, handleChange] = useForm({
    email: '',
    password: ''
  })

  const handleSubmit = () => {

    let databody = {
      email: value.email,
      password: value.password
    }
    const postURL = 'http://localhost:9000/register'
    axios.post(postURL, databody)
      .then((res) => {
        console.log("running....");
        history.push('/')
        alert("helooooooo")

      })
      .catch((err) => {
        console.log(err);
      })



  }



  return (
    <>
    <HomeMain/>
      <div className="ps-page--my-account">
        <div className="ps-breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Register an account</li>
            </ul>
          </div>
        </div>
        <div className="ps-my-account">
          <div className="container">

            

                <form className="ant-form ant-form-horizontal ps-form--account"
                  onSubmit={handleSubmit} >
                  <ul className="ps-tab-list">
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li className="active">
                      <Link to="/register">Register</Link>
                    </li>
                  </ul>
                  <div className="ps-tab active" id="register">
                    <div className="ps-form__content">
                      <h5>Register An Account</h5>
                      <div className="form-group">
                        <div className="ant-row ant-form-item">
                          <div className="ant-col ant-form-item-control">
                            <div className="ant-form-item-control-input">
                              <div className="ant-form-item-control-input-content">
                                <input
                                  type="email"
                                  name="email"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                  className="ant-input form-control"
                                  placeholder="Email address"
                                  id="email"
                                />
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group form-forgot">
                        <div className="ant-row ant-form-item">
                          <div className="ant-col ant-form-item-control">
                            <div className="ant-form-item-control-input">
                              <div className="ant-form-item-control-input-content">
                                <input
                                  type="password"
                                  name="password"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.password}
                                  className="ant-input form-control"
                                  placeholder="Password..."
                                  id="password"
                                />
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group submit">
                        <button type="button" className="ps-btn ps-btn--fullwidth">
                          Register
                        </button>
                      </div>
                    </div>
                    <div className="ps-form__footer">
                      <p>Connect with:</p>
                      <ul className="ps-list--social">
                        <li>
                          <Link className="facebook" to="#">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="google" to="#">
                            <i className="fa fa-google-plus"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="twitter" to="#">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="instagram" to="#">
                            <i className="fa fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              
           

          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Register
