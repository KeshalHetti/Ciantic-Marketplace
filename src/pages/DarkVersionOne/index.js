import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Countdown from 'react-countdown'
import { tns } from 'tiny-slider/src/tiny-slider';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StyleSwitcher from '../../components/StyleSwitcher'
import {
  client01, client02, client03, client04, client05, client06, client07, client08,
  client09, client10, client11, client12, client13,
  item1, item2, item3, item4, item5, item6,
  gif1, gif2, gif3, gif4, gif5, gif6,
  bgImage, bg1, bg2, bg3, bg02, united, community,
  work1, work2, work3, work4, work5, work6, work7, work8, work9, work10, work11, work12, cianticMarketLogoLarge,
} from '../../components/imageImport'

const DarkVersionOne = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (document.getElementsByClassName('tiny-five-item-nav-arrow').length > 0) {
      var slider6 = tns({
        container: '.tiny-five-item-nav-arrow',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: 'bottom',
        controlsText: [
          '<i class="mdi mdi-chevron-left "></i>',
          '<i class="mdi mdi-chevron-right"></i>',
        ],
        nav: false,
        speed: 400,
        gutter: 10,
        responsive: {
          992: {
            items: 5,
          },

          767: {
            items: 3,
          },

          320: {
            items: 1,
          },
        },
      })
    }
  }, [])

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

  const AuctionData = [
    {
      image: gif1,
      title: 'Iphone 14',
      type: 'GIFs',
      filter: ['all', 'games'],
      id: 'May 29, 2022 6:0:0'
    },
    {
      image: item1,
      title: 'CyberPrimal 042 LAN',
      id: '',
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: gif2,
      title: 'Crypto Egg Stamp #5',
      id: '',
      type: 'Games',
      filter: ['all', 'music', 'meme'],
    },
    {
      image: item2,
      title: 'Colorful Abstract Painting',
      id: 'June 03, 2022 5:3:1',
      type: '',
      filter: ['all', 'video'],
    },
    {
      image: item3,
      title: 'Liquid Forest Princess',
      id: '',
      type: '',
      filter: ['all', 'video', 'meme'],
    },
    {
      image: gif3,
      title: 'Spider Eyes Modern Art',
      id: 'June 10, 2022 1:0:1',
      type: 'GIFs',
      filter: ['all', 'games'],
    },
    {
      image: item4,
      title: 'Synthwave Painting',
      id: '',
      type: '',
      filter: ['all', 'art'],
    },
    {
      image: gif4,
      title: 'Contemporary Abstract',
      id: '',
      type: 'GIFs',
      filter: ['all', 'music'],
    },
    {
      image: item5,
      title: 'Valkyrie Abstract Art',
      id: '',
      type: '',
      filter: ['all', 'video', 'meme'],
    },
    {
      image: gif5,
      title: 'The girl with the firefly',
      id: '',
      type: '',
      filter: ['all', 'art'],
    },
    {
      image: item6,
      title: 'Dodo hide the seek',
      id: '',
      type: '',
      filter: ['all', 'games'],
    },
    {
      image: gif6,
      title: 'Pinky Ocean',
      id: 'June 10, 2022 1:0:1',
      type: '',
      filter: ['all', 'music'],
    },
  ]


  const [allData, setAllData] = useState(AuctionData)
  const [type, setType] = useState('all')
  const location = useLocation()
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
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
  }

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length
    var fullTxt = this.toRotate[i]
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'
    var that = this
    var delta = 200 - Math.random() * 100
    if (this.isDeleting) {
      delta /= 2
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 500
    }
    setTimeout(function () {
      that.tick()
    }, delta)
  }
  const typewrite = () => {
    if (toRotate !== 'undefined')
      var elements = document.getElementsByClassName('typewrite')
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type')
      var period = elements[i].getAttribute('data-period')
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period)
      }
    }
    // INJECT CSS
    var css = document.createElement('style')
    css.type = 'text/css'
    css.innerHTML =
      '.typewrite > .wrap { border-right: 0.08em solid transparent}'
    document.body.appendChild(css)
  }

  useEffect(() => {
    setTimeout(() => {
      if (location?.pathname === '/index-dark-rtl') {
        document.getElementById('theme-opt').href = './css/style-dark-rtl.min.css'
      } else if (location?.pathname === '/index') {
        document.getElementById('theme-opt').href = './css/style.min.css'
      } else if (location?.pathname === '/index-rtl') {
        document.getElementById('theme-opt').href = './css/style-rtl.min.css'
      } else {
        document.getElementById('theme-opt').href = './css/style-dark.min.css'
      }
      toggleSwitcher(false)
      activateMenu()
    }, 100)
    typewrite()
  }, [location?.pathname])



  const setFilter = type => {
    setType(type)
    const newOne = AuctionData?.filter(data => data?.filter?.includes(type))
    setAllData(newOne)
  }
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Start Home */}
      <section
        className="bg-half-170 d-table w-100"
        style={{ background: `url(${bgImage}) background-position: center center` }}
      // style="background-image: url('images/bg/bg01.png'); background-position: center center;"
      >
        <div className="bg-overlay"> {/* Note: Class to add a gradient on top. (className="bg-overlay bg-gradient-primary opacity-8") */}
        <img src={bg02} className="img-fluid" alt="" />
        </div>
        <div className="container mt-100">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="title-heading">
                <h6 className="text-light title-dark fw-normal">
                  Explore, Buy & Sell Anything You Want!
                </h6>
                <h4 className="heading text-white title-dark fw-bold mb-3">
                  Join The New Era of <br />{' '}
                  <span
                    className="typewrite"
                    data-period="2000"
                    data-type='[ "Electronics", "Software", "Fashion", "Digital Arts", "Illustrations", "Games", "Smart Home", "Health & Household"]'
                  ></span>
                </h4>
                <p className="text-white-50 para-desc mb-0 mb-0">
                  We are a marketplace dedicated to connecting <br />{' '} Buyers & Sellers from Sri Lanka at <br />{' '} Ciantic Market!
                </p>

                <div className="mt-4 pt-2">
                  <a
                    href="/aboutus"
                    onClick={e => {
                      e.preventDefault()
                      navigate('/explore-one')
                    }}
                    className="btn btn-pills btn-outline-light-white"
                  >
                    Discover Now
                  </a>
                </div>
              </div>
            </div>
            {/*end slide*/}

            <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <img src={cianticMarketLogoLarge} className="img-fluid" alt="" />
            </div>
            {/*end slide*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Home */}

      {/* Start */}
      <section className="section">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Explore Our Products</h4>
                {/* <p className="text-muted para-desc mb-0 mx-auto">
                  We are a huge marketplace dedicated to connecting great
                  artists of all Superex with their fans and unique token
                  collectors!
                </p> */}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div className="row justify-content-center mt-4 mb-5">
            <div className="col filters-group-wrap">
              <div className="filters-group">
                <ul className="container-filter mb-0 categories-filter text-center list-unstyled">
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'all' ? 'active' : ''
                      }`}
                    // data-group="all"
                    onClick={() => setFilter('all')}
                  >
                    <i className="uil uil-browser"></i> All
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'games' ? 'active' : ''
                      }`}
                    // data-group="games"
                    onClick={() => setFilter('games')}
                  >
                    <i className="uil uil-volleyball"></i> Games
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'art' ? 'active' : ''
                      }`}
                    // data-group="art"
                    onClick={() => setFilter('art')}
                  >
                    <i className="uil uil-chart-pie-alt"></i> Art
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'music' ? 'active' : ''
                      }`}
                    // data-group="music"
                    onClick={() => setFilter('music')}
                  >
                    <i className="uil uil-music"></i> Music
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'video' ? 'active' : ''
                      }`}
                    // data-group="video"
                    onClick={() => setFilter('video')}
                  >
                    <i className="uil uil-camera-plus"></i> Video
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'meme' ? 'active' : ''
                      }`}
                    // data-group="memes"
                    onClick={() => setFilter('meme')}
                  >
                    <i className="uil uil-rocket"></i> Memes
                  </li>
                </ul>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div
            className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4"
            id="grid"
            style={{ justifyContent: "left" }}
          >
            {allData?.map(data => {
              return (
                <div className="col picture-item" key={data?.title}>
                  <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                    <div className="d-flex justify-content-between">
                      <div className="img-group">
                        <a
                          href="/creator-profile"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/creator-profile')
                          }}
                          className="user-avatar"
                        >
                          <img
                            src={client08}
                            alt="user"
                            className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                          />
                        </a>
                        <a
                          href="/creator-profile"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/creator-profile')
                          }}
                          className="user-avatar ms-n3"
                        >
                          <img
                            src={client05}
                            alt="user"
                            className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                          />
                        </a>
                        <a
                          href="/creator-profile"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/creator-profile')
                          }}
                          className="user-avatar ms-n3"
                        >
                          <img
                            src={client06}
                            alt="user"
                            className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"
                          />
                        </a>
                      </div>

                      <span className="like-icon shadow-sm">
                        <a
                          href=""
                          onClick={e => e.preventDefault()}
                          className="text-muted icon"
                        >
                          <i className="mdi mdi-18px mdi-heart mb-0"></i>
                        </a>
                      </span>
                    </div>

                    <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                      <a
                        href="/item-detail-one"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/item-detail-one')
                        }}
                      >
                        <img src={data?.image} className="img-fluid" alt="" />
                      </a>
                      <div className="position-absolute top-0 start-0 m-2">
                        <a
                          href=""
                          onClick={e => e.preventDefault()}
                          className="badge badge-link bg-primary"
                        >
                          GIFs
                        </a>
                      </div>

                      <div className="position-absolute top-0 end-0 m-2">
                        <a
                          href="/item-detail-one"
                          onClick={e => {
                            e.preventDefault()
                            navigate('/item-detail-one')
                          }}
                          className="btn btn-pills btn-icon"
                        >
                          <i className="uil uil-shopping-cart-alt"></i>
                        </a>
                      </div>
                      <div className={`${data?.id ? '' : 'hide-data'} position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3`}>
                        <i className="uil uil-clock"></i>{' '}
                        <Countdown
                          date={data?.id}
                          renderer={({ days, hours, minutes, seconds }) => (
                            <span>
                             {days}:{hours}:{minutes}:{seconds}
                            </span>
                          )}
                        />
                      </div>
                    </div>

                    <div className="card-body content position-relative p-0 mt-3">
                      <a
                        href="/item-detail-one"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/item-detail-one')
                        }}
                        className="title text-dark h6"
                      >
                        {data?.title}
                      </a>

                      <div className="d-flex justify-content-between mt-2">
                        <small className="rate fw-bold">20.5 ETH</small>
                        <small className="text-dark fw-bold">1 out of 10</small>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/*end container*/}
        {/*end section*/}
        {/* End */}
      </section>
      {/* footer */}
      <Footer />

      {/* Style switcher  */}
      <StyleSwitcher />
    </>
  )
}

export default DarkVersionOne
