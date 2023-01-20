import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Countdown from 'react-countdown'
import { tns } from 'tiny-slider/src/tiny-slider';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import {
  client01, client02, client03, client04, client05, client06, client07, client08,
  client09, client10, client11, client12, client13,
  item1, item2, item3, item4, item5, item6, item7,
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

  const AuctionData = [
    {
      image: item3,
      title: 'Samsung Galaxy S22 Ultra',
      price: 400000,
      quantity: '15 In Stock',
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: item7,
      title: 'Iphone 14 Pro Max',
      price: 600000,
      quantity: '15 In Stock',
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: item4,
      title: 'Sony a7 III ILCE7M3/B',
      price: 800000,
      quantity: '15 In Stock',
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: item5,
      title: 'Samsung 85-Inch QN900B Neo QLED 8K',
      price: 1636920,
      quantity: '15 In Stock',
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: item6,
      title: 'Google Nest Cam Outdoor or Indoor',
      price: 300000,
      quantity: '15 In Stock',
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: item1,
      title: 'Beautiful Handmade Hand Carving Wooden Elephant For Gift Item',
      price: 90000,
      quantity: '15 In Stock',
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: item1,
      title: 'Nike Air Jordan Lift Off Chicago Bulls White Gym Red Black AR4430-106 Mens',
      price: 90000,
      quantity: '15 In Stock',
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: item1,
      title: 'Hanes Men Fleece Sweatpants w/ pockets ComfortSoft EcoSmart Low-pill High Stitch',
      price: 90000,
      quantity: '15 In Stock',
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: item1,
      title: 'CyberPrimal 042 LAN',
      price: 90000,
      quantity: '15 In Stock',
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: item1,
      title: 'CyberPrimal 042 LAN',
      price: 90000,
      quantity: '15 In Stock',
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: item1,
      title: 'CyberPrimal 042 LAN',
      price: 90000,
      quantity: '15 In Stock',
      type: 'Arts',
      filter: ['all', 'art'],
    },
    {
      image: item1,
      title: 'CyberPrimal 042 LAN',
      price: 90000,
      quantity: '15 In Stock',
      type: 'Arts',
      filter: ['all', 'art'],
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
      /* toggleSwitcher(false) */
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

          <div className="row justify-content-center mb-4 pb-2">
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
                  Electronics
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'art' ? 'active' : ''
                      }`}
                    // data-group="art"
                    onClick={() => setFilter('art')}
                  >
                  Software
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'music' ? 'active' : ''
                      }`}
                    // data-group="music"
                    onClick={() => setFilter('music')}
                  >
                  Household
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'video' ? 'active' : ''
                      }`}
                    // data-group="video"
                    onClick={() => setFilter('video')}
                  >
                  Fashion
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'meme' ? 'active' : ''
                      }`}
                    // data-group="memes"
                    onClick={() => setFilter('meme')}
                  >
                  Workshop Equipment
                  </li>
                  <li
                    className={`list-inline-item categories position-relative text-dark ${type === 'meme' ? 'active' : ''
                      }`}
                    // data-group="memes"
                    onClick={() => setFilter('')}
                  >
                  Health Care
                  </li>
                </ul>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}

          <div
            className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 g-4"
            id="grid"
          >
            {allData?.map(data => {
              return (
                <div className="col picture-item" key={data?.title}>
                  <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                    <div className="nft-image position-relative overflow-hidden">
                      <img src={data?.image} className="img-fluid" alt="" />
                      <div className="position-absolute top-0 end-0 m-2">
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
                    </div>

                    <div className="card-body content position-relative">
                      <div className="mt-2">
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
                          <small className="rate fw-bold">LKR {data?.price}</small>
                          <small className="text-dark fw-bold">
                          {data?.quantity}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/*end col*/}
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col">
              <div className="text-center">
                <a
                  href="/aboutus"
                  onClick={e => {
                    e.preventDefault()
                    navigate('/explore-one')
                  }}
                  className="btn btn-primary rounded-md"
                >
                  <i className="uil uil-process mdi-spin me-1"></i> Visit the Marketplace
                </a>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
        {/*end section*/}
        {/* End */}
      </section>
      {/* footer */}
      <Footer />
    </>
  )
}

export default DarkVersionOne
