import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import HomeMain from '../Home-Main/HomeMain'
import Footer from '../Footer/Footer'

function Login() {
  // const history = useHistory()

  const [email, setEmail] = useState('')
  
  // const [password, setPassword] = useState('')

  // const handleSubmit = () => {
  //     // alert("hey....")
  //     history.push("/")
  // }

  return (
    <>
    {/* <HomeMain/> */}
      <div className="ps-page--my-account ">
        <div className="ps-breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>Login</li>
            </ul>
          </div>
        </div>
        <div className="ps-my-account">
          <div className="container">
          <Formik
              initialValues={{ email: '', password: '' }}
              validate={(values) => {
                const errors = {}
                if (!values.email) {
                  errors.email = 'Required'
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address'
                }
                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 400)
                setEmail(values.email)
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                
                <form
                  className="ant-form ant-form-horizontal ps-form--account pb-4"
                  onSubmit={handleSubmit}
                >
                  <ul className="ps-tab-list">
                    <li className="active">
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </ul>
                  <div className="ps-tab active" id="sign-in">
                    <div className="ps-form__content">
                      <h5>Log In Your Account</h5>
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
                                  placeholder="Username or email address"
                                  id="username"
                                />
                                <span style={{ color: 'red' }}>
                                  {errors.email &&
                                    touched.email &&
                                    errors.email}
                                </span>
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
                                <span style={{ color: 'red' }}>
                                  {errors.password &&
                                    touched.password &&
                                    errors.password}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="ps-checkbox">
                          <input
                            type="checkbox"
                            className="form-control"
                            id="remember-me"
                            name="remember-me"
                          />
                          <label htmlFor="remember-me">Rememeber me</label>
                        </div>
                      </div>
                      <div className="form-group submit">
                        <button
                          type="button"
                          className="ps-btn ps-btn--fullwidth"
                          
                        >
                          Login
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
              )}
            </Formik>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Login
