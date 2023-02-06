import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { character, client01, lightLogo, logoDark } from '../imageImport'
import { auth } from '../../firebase-config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  deleteUser
} from "firebase/auth";
const Navbar = () => {
  const [myPublicAddress, setMyPublicAddress] = useState('qhut0...hfteh45')
  const location = useLocation()
  const navigate = useNavigate()
  const url = useMemo(() => location?.pathname === '/blog-detail', [])
  const templatePage = [
    '/item-detail-one',
  ]
  const becomeUrl = templatePage.includes(location?.pathname)
  const [mobile, setMobile] = useState([])
  const [user, setUser] = useState({});
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const toggleSwitcher = () => {
    var i = document.getElementById('style-switcher')
    if (i) {
      if (i.style.left === '-189px') {
        i.style.left = '0px'
      } else {
        i.style.left = '-189px'
      }
    }
  }
  const mobileHandler = (e, panel) => {
    e.preventDefault()
    const dataIndex = mobile?.findIndex(data => data === panel)
    if (dataIndex === -1) {
      setMobile([...mobile, panel])
    } else {
      const updateRecord = mobile?.filter((data, index) => index !== dataIndex)
      setMobile(updateRecord)
    }
  }

  const closeModal = () => {
    //   metamask modal
    const modal = document.getElementById('modal-metamask')

    modal.classList.remove('show')
    modal.style.display = 'none'
  }

  const isMetaMaskInstalled = useCallback(() => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window
    return Boolean(ethereum && ethereum.isMetaMask)
  }, [])

  const getClosest = (elem, selector) => {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) { }
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;

  };

  const activateMenu = () => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {

      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add('active');
        var immediateParent = getClosest(matchingMenuItem, 'li');
        if (immediateParent) {
          immediateParent.classList.add('active');
        }

        var parent = getClosest(matchingMenuItem, '.parent-menu-item');
        if (parent) {
          parent.classList.add('active');
          var parentMenuitem = parent.querySelector('.menu-item');
          if (parentMenuitem) {
            parentMenuitem.classList.add('active');
          }
          var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        } else {
          var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
          if (parentOfParent) {
            parentOfParent.classList.add('active');
          }
        }
      }
    }
  }

  const toggleMenu = () => {
    document.getElementById('isToggle').classList.toggle('open');
    var isOpen = document.getElementById('navigation')
    if (isOpen.style.display === "block") {
      isOpen.style.display = "none";
    } else {
      isOpen.style.display = "block";
    }
  };

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


  const logout = async () => {
    await signOut(auth);
  };
  return (
    <>
      {/* Navbar STart */}
      <header
        id="topnav"
        className={`defaultscroll sticky ${url && 'gradient'}`}
      >
        <div className="container">
          {/* Logo Start*/}
          <a
            className="logo"
            href="/index"
            onClick={e => {
              e.preventDefault()
              navigate('/index')
              setTimeout(() => {
                activateMenu()
                toggleSwitcher(false)
              }, 1000)
            }}
          >
          </a>
          {/* Logo end*/}

          {/* Mobile */}
          <div className="menu-extras">
            <div className="menu-item">
              {/* Mobile menu toggle*/}
              <a
                className="navbar-toggle"
                id="isToggle"
                onClick={e => {
                  e.preventDefault()
                  toggleMenu()
                }}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
              {/* End mobile menu toggle*/}
            </div>
          </div>
          {/* Mobile */}

          {/*Login button Start*/}
          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item mb-0 me-3">
              <div className="dropdown">
                <button
                  type="button"
                  className="btn dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {becomeUrl ? (
                    <i className="uil uil-search text-dark fs-5 align-middle"></i>
                  ) : (
                    <>
                      <i className="uil uil-search text-white title-dark btn-icon-light fs-5 align-middle"></i>
                      <i className="uil uil-search text-dark btn-icon-dark fs-5 align-middle"></i>
                    </>
                  )}
                </button>
                <div
                  className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-0"
                  style={{ width: 300 }}
                >
                  <div className="search-bar">
                    <div id="itemSearch" className="menu-search mb-0">
                      <form
                        role="search"
                        method="get"
                        id="searchItemform"
                        className="searchform"
                      >
                        <input
                          type="text"
                          className="form-control border rounded"
                          name="s"
                          id="searchItem"
                          placeholder="Search..."
                        />
                        <input
                          type="submit"
                          id="searchItemsubmit"
                          value="Search"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="list-inline-item mb-10 me-1" >
            {user ? user.email : <a
              href="/login"
              onClick={e => {
                e.preventDefault()
                navigate('/login')
              }}
              /* className="sub-menu-item" */
            >
              Sign in
            </a>}

            </li>

            <li className="list-inline-item mb-10 me-1" >
            
            {!user && <a
              href="/signup"
              onClick={e => {
                e.preventDefault()
                navigate('/signup')
              }}
              /* className="sub-menu-item" */
            >
              / Sign Up
            </a>}
            </li>
            

            <li className="list-inline-item mb-0">
               <div className="dropdown dropdown-primary">
                <button
                  type="button"
                  className="btn btn-pills dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {user && user.email && <img
                    src={client01}
                    className="rounded-pill avatar avatar-sm-sm"
                    alt=""
                  />}
                </button>
                <div
                  className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 pb-3 pt-0 overflow-hidden rounded"
                  style={{ minWidth: 200 }}>
                  <div className="position-relative">
                    <div className="pt-5 pb-3 bg-gradient-primary"></div>
                    <div className="px-3">
                      <div className="d-flex align-items-end mt-n4">
                        <img
                          src={client01}
                          className="rounded-pill avatar avatar-md-sm img-thumbnail shadow-md"
                          alt=""
                        />
                        <h6 className="text-dark fw-bold mb-0 ms-1">
                          Calvin Carlo
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <a
                      className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                      href="/creator-profile"
                      onClick={e => {
                        e.preventDefault()
                        navigate('/creator-profile')
                      }}
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-user align-middle h6 mb-0 me-1"></i>
                      </span>{' '}
                      Profile
                    </a>
                    <div className="dropdown-divider border-top"></div>
                    <a
                      className="dropdown-item small fw-semibold text-dark d-flex align-items-center"
                      href="/"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/')
                      }}
                    >
                      <span className="mb-0 d-inline-block me-1">
                        <i className="uil uil-sign-out-alt align-middle h6 mb-0 me-1"></i>
                      </span>{' '}
                      <a onClick={logout}> Logout </a>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          {/*Login button End*/}

          <div id="navigation">
            {/* Navigation Menu*/}
            <ul
              className={`navigation-menu nav-left ${!becomeUrl && 'nav-light'
                }`}
            >
              <li>
                <a
                  href="/"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/')
                  }}
                  className="sub-menu-item"
                >
                  {' '}
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/explore-one"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/explore-one')
                  }}
                  className="sub-menu-item"
                >
                  {' '}
                  Marketplace
                </a>
              </li>

              <li>
                <a
                  href="/auction"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/auction')
                  }}
                  className="sub-menu-item"
                >
                  {' '}
                  Live Auction
                </a>
              </li>

              {<li className="has-submenu parent-parent-menu-item">
                <a href="" onClick={e => mobileHandler(e, 'pages')}>
                  More
                </a>
                <span className="menu-arrow"></span>
                <ul
                  className={`submenu ${mobile.includes('pages') ? 'open' : ''
                    }`}
                >
                  <li className="has-submenu parent-menu-item">
                    <a href="" onClick={e => mobileHandler(e, 'creators')}>
                      {' '}
                      User Pages{' '}
                    </a>
                    <span className="submenu-arrow"></span>
                    <ul
                      className={`submenu ${mobile.includes('creators') ? 'open' : ''
                        }`}
                    >
                      <li>
                        <a
                          href="/creator-profile"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/creator-profile')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Admin Panel
                        </a>
                      </li>
                      <li>
                        <a
                          href="/creator-profile-edit"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/creator-profile-edit')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Profile Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="/upload-work"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/upload-work')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Sell Items
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <a href="" onClick={e => mobileHandler(e, 'special')}>
                      {' '}
                      Special
                      {/* <span className="badge bg-warning">NEW</span> */}{' '}
                    </a>
                    <span className="submenu-arrow"></span>
                    <ul
                      className={`submenu ${mobile.includes('special') ? 'open' : ''
                        }`}
                    >
                      <li>
                        <a
                          href="/comingsoon"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/comingsoon')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a
                          href="/maintenance"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/maintenance')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          Maintenance
                        </a>
                      </li>
                      <li>
                        <a
                          href="/error"
                          onClick={e => {
                            e.preventDefault()
                            setTimeout(() => {
                              activateMenu()
                              toggleSwitcher(false)
                            }, 1000)
                            navigate('/error')
                          }}
                          className="sub-menu-item"
                        >
                          {' '}
                          404!
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="/changelog"
                      onClick={e => {
                        e.preventDefault()
                        setTimeout(() => {
                          activateMenu()
                          toggleSwitcher(false)
                        }, 1000)
                        navigate('/changelog')
                      }}
                      className="sub-menu-item"
                    >
                      Changelog
                    </a>
                  </li>
                </ul>
              </li>}

              <li>
                <a
                  href="/contact"
                  onClick={e => {
                    e.preventDefault()
                    setTimeout(() => {
                      activateMenu()
                      toggleSwitcher(false)
                    }, 1000)
                    navigate('/contact')
                  }}
                  className="sub-menu-item"
                >
                  Contact
                </a>
              </li>
            </ul>
            {/*end navigation menu*/}
          </div>
          {/*end navigation*/}
        </div>
        {/*end container*/}
      </header>
      {/*end header*/}
      {/* Navbar End */}
    </>
  )
}

export default Navbar
