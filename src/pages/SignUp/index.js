import {React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { cianticLogo } from '../../components/imageImport'
import { auth } from '../../firebase-config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  deleteUser
} from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate()
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);


  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

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
          {/* <iframe src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0"></iframe> */}
          {/* Note: Vimeo Embed Background Video */}

          <iframe src="https://www.youtube.com/embed/OfeDhzMgp7U?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"></iframe>
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
                    <img src={cianticLogo} alt="" />
                  </a>
                </div>
                {/*  End Logo  */}

                {/*  Start Content  */}
                <div className="title-heading text-center my-auto">
                  <div className="form-signin px-4 py-5 bg-white rounded-md shadow-sm">
                    <form>
                      <h5 className="mb-4">Register Your Account</h5>

                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-floating mb-2">
                            <input
                              type="email"
                              className="form-control"
                              id="RegisterEmail"
                              placeholder="name@example.com" onChange={(event) => {setRegisterEmail(event.target.value);}}
                            />
                            <label htmlFor="RegisterEmail">Email Address</label>
                          </div>
                        </div>
                        {/* end col */}

                        <div className="col-lg-12">
                          <div className="form-floating mb-3">
                            <input
                              type="password"
                              className="form-control"
                              id="RegisterPassword"
                              placeholder="Password" onChange={(event) => {setRegisterPassword(event.target.value);}}
                            />
                            <label htmlFor="RegisterPassword">Password</label>
                          </div>
                        </div>
                        {/* end col */}

                        <div className="col-lg-12">
                          <div className="form-check align-items-center d-flex mb-3">
                            <input
                              className="form-check-input mt-0"
                              type="checkbox"
                              value=""
                              id="AcceptT&C"
                            />
                            <label
                              className="form-check-label text-muted ms-2"
                              htmlFor="AcceptT&C"
                            >
                              I Accept{' '}
                              <a
                                href=""
                                onClick={e => e.preventDefault()}
                                className="text-primary"
                              >
                                Terms And Condition
                              </a>
                            </label>
                          </div>
                        </div>
                        {/* end col */}

                        <div className="col-lg-12">
                        <a
                              onClick={register}
                              className="btn btn-primary rounded-md w-100"
                            >
                              Register
                         </a>
                        </div>
                        {user && user.email && navigate('/')}
                        {/* end col */}

                        <div className="col-12 text-center mt-4">
                          <small>
                            <span className="text-muted me-2">
                              Already have an account ?{' '}
                            </span>{' '}
                            <a
                              href="/login"
                              onClick={e => {
                                e.preventDefault()
                                navigate('/login')
                              }}
                              className="text-dark fw-bold"
                            >
                              Sign in
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

export default SignUp
