import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { bg01, client01 } from '../../components/imageImport'
import { FiCamera } from 'react-icons/fi'
import { auth } from "../../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  deleteUser,
  reauthenticateWithCredential,
  EmailAuthProvider
} from "firebase/auth";

const CreatorProfileEdit = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('streetboyyy')
  const [url, setUrl] = useState('https://Ciantic.exe/streetboyyy')
  const [twitter, _twitter] = useState('https://twitter.com/streetboyyy')
  const [website, setWebsite] = useState('https://streetboyyy.com/')
  const [email, setEmail] = useState('streetboyyy@example.com')
  const [follow, setFollow] = useState(true)
  const [job, setJob] = useState(true)
  const [unsubscribe, setUnsubscribe] = useState(true)

  const [reauthPassword, setReauthPassword] = useState("");
  const [isShown, setIsShown] = useState(false);

  const loadFile = function (event) {
    var image = document.getElementById(event.target.name)
    image.src = URL.createObjectURL(event.target.files[0])
  }
  const user = auth.currentUser
  const handleClick = () => {
    setIsShown(current => !current);

  };

  const credential = EmailAuthProvider.credential(
    auth.currentUser.email,
    reauthPassword
)

const reauth = async () => {
  await reauthenticateWithCredential(auth.currentUser, credential)
  deleteUser(user).then(() => {
    console.log(user)
    navigate('/')
  }).catch((error) => {
    console.log(error)
  });
}

  
  return (
    
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home */}
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: `url(${bg01}) bottom` }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  Edit Profile
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Edit your profile
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="position-middle-bottom">
            <nav aria-label="breadcrumb" className="d-block">
              <ul
                className="breadcrumb breadcrumb-muted mb-0 p-0"
                style={{ backgroundColor: 'transparent' }}
              >
                <li className="breadcrumb-item">
                  <a
                    href="index"
                    onClick={e => {
                      e.preventDefault()
                      navigate('/index')
                    }}
                  >
                    Ciantic
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Profile Edit
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      {/* End Home */}

      {/* Start */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h5>
                You can set preferred display name, create your branded profile
                URL and manage other personal settings.
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-7 col-12 order-2 order-md-1 mt-4 pt-2">
              <div className="rounded-md shadow">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0">Edit Profile :</h5>
                </div>

                <div className="p-4">
                  <form className="profile-edit">
                    <div className="row">
                      <div className="col-12 mb-4">
                        <label className="form-label h6">Username</label>
                        <input
                          name="name"
                          id="first"
                          type="text"
                          className="form-control"
                          value={name}
                          onChange={e => setName(e.target.value)}
                        />
                      </div>
                      {/*end col*/}

                      <div className="col-12 mb-4">
                        <label className="form-label h6">URL</label>
                        <div className="form-icon">
                          <input
                            name="url"
                            id="Ciantic-url"
                            type="url"
                            className="form-control"
                            value={url}
                            onChange={e => setUrl(e.target.value)}
                          />
                        </div>
                      </div>
                      {/*end col*/}

                      <div className="col-12 mb-4">
                        <label className="form-label h6">Bio</label>
                        <textarea
                          name="comments"
                          id="comments"
                          rows="3"
                          className="form-control"
                          placeholder="I'm a Digital Artist. Digital Art with over 3 years of experience. Experienced with all stages of the Art cycle for dynamic projects."
                        ></textarea>
                      </div>
                      {/*end col*/}

                      <div className="col-12 mb-4">
                        <label className="form-label h6">Twitter Account</label>
                        <p className="text-muted">
                          Link your twitter account to gain more trust on the
                          Marketplace
                        </p>
                        <div className="form-icon">
                          <input
                            name="url"
                            id="twitter-url"
                            type="url"
                            className="form-control"
                            value={twitter}
                            onChange={e => _twitter(e.target.value)}
                          />
                        </div>
                      </div>
                      {/*end col*/}

                      <div className="col-12 mb-4">
                        <label className="form-label h6">Website</label>
                        <div className="form-icon">
                          <input
                            name="url"
                            id="web-url"
                            type="url"
                            className="form-control"
                            value={website}
                            onChange={e => setWebsite(e.target.value)}
                          />
                        </div>
                      </div>
                      {/*end col*/}

                      <div className="col-12 mb-4">
                        <label className="form-label h6">Email</label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}

                    <div className="row">
                      <div className="col-12">
                        <button
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary rounded-md"
                        >
                          Update Profile
                        </button>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </form>
                </div>
              </div>

              <div className="rounded-md shadow mt-4">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0">Account Notifications :</h5>
                </div>

                <div className="p-4">
                  <div className="d-flex justify-content-between py-4">
                    <h6 className="mb-0">When someone follows me</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={follow}
                        onClick={() => setFollow(!follow)}
                        id="noti2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="noti2"
                      ></label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between py-4 border-top">
                    <h6 className="mb-0">When someone messages me</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="noti4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="noti4"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-md shadow mt-4">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0">Marketing Notifications :</h5>
                </div>

                <div className="p-4">
                  <div className="d-flex justify-content-between pb-4">
                    <h6 className="mb-0">There is a sale or promotion</h6>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="noti5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="noti5"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-md shadow mt-4">
                <div className="p-4 border-bottom">
                  <h5 className="mb-0 text-danger">Delete Account :</h5>
                </div>

                <div className="p-4">
                  <h6 className="mb-0">
                    Do you want to delete the account? Please press below
                    "Delete" button
                  </h6>
                  <div className="mt-4">
                    <a className="btn btn-danger" onClick={handleClick}>Delete Account</a>
                    {isShown && (
                      <div>
                        <br/>
                        <input 
                        type="password"
                        className="form-control"
                        placeholder='Password: ' 
                        onChange={(event) => {setReauthPassword(event.target.value);}}
                        />
                        <br/>
                        <a className="btn btn-success" onClick={reauth}>Confirm Account Deletion</a>
                      </div>
                    )}
                  </div>
                  {/*end col*/}
                </div>
              </div>
            </div>
            {/*end col*/}

            <div className="col-lg-4 col-md-5 col-12 order-1 order-md-2 mt-4 pt-2">
              <div className="card ms-lg-5">
                <div className="profile-pic">
                  <input
                    id="pro-img"
                    name="profile-image"
                    type="file"
                    className="d-none"
                    onChange={e => loadFile(e)}
                  />
                  <div className="position-relative d-inline-block">
                    <img
                      src={client01}
                      className="avatar avatar-medium img-thumbnail rounded-pill shadow-sm"
                      id="profile-image"
                      alt=""
                    />
                    <label
                      className="icons position-absolute bottom-0 end-0"
                      htmlFor="pro-img"
                    >
                      <span className="btn btn-icon btn-sm btn-pills btn-primary">
                        <FiCamera className="icons" />
                      </span>
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-muted mb-0">
                    We recommend an image of at least 400X400. GIFs work too.
                  </p>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}

      {/* footer */}
      <Footer />
    </>
  )
}

export default CreatorProfileEdit
