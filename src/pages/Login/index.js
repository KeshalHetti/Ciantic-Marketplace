import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { whiteLogo } from '../../components/imageImport'
import { auth } from "../../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  deleteUser,
} from "firebase/auth";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const navigate = useNavigate()
  return (
    <>
      <div className="back-to-home">
        <a
          href=""
          onClick={e => e.preventDefault()}
          className="back-button btn btn-pills btn-sm btn-icon btn-primary"
        >
          <FiArrowLeft className="icons" />
        </a>
      </div>

      {/*  Hero Start  */}
      <section className="position-relative">
        <div className="bg-video-wrapper">
        <iframe src="https://www.youtube.com/embed/OfeDhzMgp7U?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"></iframe>
          {/* Note: Vimeo Embed Background Video */}

          {/*  <iframe src="https://www.youtube.com/embed/yba7hPeTSjk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"></iframe>  */}
          {/* Note: Youtube Embed Background Video */}
        </div>
        <div className="bg-overlay bg-linear-gradient-2"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="d-flex flex-column min-vh-100 p-4">
                {/*  Start Logo  */}
                <div className="text-center">
                  <a href="">
                    <img src={whiteLogo} alt="" />
                  </a>
                </div>
                {/*  End Logo  */}

                {/*  Start Content  */}
                <div className="title-heading text-center my-auto">
                  <div className="form-signin px-4 py-5 bg-white rounded-md shadow-sm">
                    <form>
                      <h5 className="mb-4">Login</h5>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-floating mb-2">
                            <input
                              type="email"
                              className="form-control"
                              id="LoginEmail"
                              placeholder="name@example.com"
                              onChange={(event) => {
                                setLoginEmail(event.target.value);
                              }}
                            />
                            <label htmlFor="LoginEmail">Email Address:</label>
                          </div>
                        </div>
                        {/* end col */}

                        <div className="col-lg-12">
                          <div className="form-floating mb-3">
                            <input
                              type="password"
                              className="form-control"
                              id="LoginPassword"
                              placeholder="Password"
                              onChange={(event) => {
                                setLoginPassword(event.target.value);
                              }}
                            />
                            <label htmlFor="LoginPassword">Password:</label>
                          </div>
                        </div>
                        {/* end col */}

                        <div className="col-lg-12">
                          <div className="d-flex justify-content-between">
                            <div className="mb-3">
                              <div className="form-check align-items-center d-flex mb-0">
                                <input
                                  className="form-check-input mt-0"
                                  type="checkbox"
                                  value=""
                                  id="RememberMe"
                                />
                                <label
                                  className="form-check-label text-muted ms-2"
                                  htmlFor="RememberMe"
                                >
                                  Remember me
                                </label>
                              </div>
                            </div>
                            <small className="text-muted mb-0">
                              <a
                                href="/reset-password"
                                onClick={e => {
                                  e.preventDefault()
                                  navigate('/reset-password')
                                }}
                                className="text-muted fw-semibold"
                              >
                                Forgot password ?
                              </a>
                            </small>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-12">

                        <a className="btn btn-primary rounded-md w-100" onClick={login}>
                              Sign In
                         </a>
                        </div>
                        {user && user.email && navigate('/')}
                        {/* end col */}

                        <div className="col-12 text-center mt-4">
                          <small>
                            <span className="text-muted me-2">
                              Don't have an account ?
                            </span>{' '}
                            <a
                              href="/signup"
                              onClick={e => {
                                e.preventDefault()
                                navigate('/signup')
                              }}
                              className="text-dark fw-bold"
                            >
                              Sign Up
                            </a>
                          </small>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </form>
                  </div>
                </div>
                {/*  End Content  */}

                {/*  Start Footer  */}
                <div className="text-center">
                  <small className="mb-0 text-light title-dark">
                    © <script>document.write(new Date().getFullYear())</script>{' '}
                    Designed & Developed By Ciantic.
                  </small>
                </div>
                {/*  End Footer  */}
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end section */}
      {/*  Hero End  */}
    </>
  )
}

export default Login
