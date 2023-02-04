import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Countdown from 'react-countdown'
import { tns } from 'tiny-slider/src/tiny-slider';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import {
  client01, client02, client03, client04, client05, client06,
  client09, client10, client11, client12, client13, bgImage,bg02, cianticMarketLogoLarge,
  c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15,c16, c17
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

  const collectionData = [
      {
        title: 'All',
        img1: c3,
        img2: c11,
        img3: c8,
        img4: c10,
        client: client01,
      },
      
      {
        title: 'Electronics',
        img1: c4,
        img2: c1,
        img3: c10,
        img4: c3,
        client: client02,
      },
      {
        title: 'Software',
        img1: c8,
        img2: c2,
        img3: c5,
        img4: c7,
        client: client12,
      },
      {
        title: 'Household',
        img1: c13,
        img2: c9,
        img3: c11,
        img4: c12,
        client: client12,
      },
      {
        title: 'Fashion',
        img1: c15,
        img2: c14,
        img3: c16,
        img4: c17,
        client: client12,
      },
      {
        title: 'Workshop Equipment',
        img1: c8,
        img2: c9,
        img3: c11,
        img4: c12,
        client: client12,
      },
    ]

  /* const [allData, setAllData] = useState(AuctionData)
  const [type, setType] = useState('all') */
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


/* 
  const setFilter = type => {
    setType(type)
    const newOne = AuctionData?.filter(data => data?.filter?.includes(type))
    setAllData(newOne)
  } */
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
        <div className="bg-overlay"> {/* Note: Class to add a gradient onlay bg-gradient-primary opacity-8") */}
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

            {/* <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <img src={cianticMarketLogoLarge} className="img-fluid" alt="" />
            </div> */}
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
        <div className="container">
          <div className="row g-4">
            {collectionData?.map((collection, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card collections collection-primary rounded-md shadow p-2 pb-0">
                  <div className="row g-2">
                    <div className="col-12">
                      <img
                        src={collection?.img1}
                        className="img-fluid shadow-sm rounded-md"
                        alt=""
                      />
                    </div>
                    {/*end col*/}

                    <div className="col-4">
                      <img
                        src={collection?.img2}
                        className="img-fluid shadow-sm rounded-md"
                        alt=""
                      />
                    </div>
                    {/*end col*/}

                    <div className="col-4">
                      <img
                        src={collection?.img3}
                        className="img-fluid shadow-sm rounded-md"
                        alt=""
                      />
                    </div>
                    {/*end col*/}

                    <div className="col-4">
                      <img
                        src={collection?.img4}
                        className="img-fluid shadow-sm rounded-md"
                        alt=""
                      />
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}

                  <div className="content text-center p-4 mt-n5">
                    <div className="position-relative d-inline-flex">
                    </div>
                    <div className="mt-2">
                      <a
                        href="/explore-four"
                        onClick={e => {
                          e.preventDefault()
                          navigate('/explore-four')
                        }}
                        className="text-dark title h5"
                      >
                        {collection?.title}
                      </a>
                      <p className="text-muted mb-0 small">27 Items</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col">
              <div className="text-center">
                <a
                  href="/explore-one"
                  onClick={e => {
                    e.preventDefault()
                    navigate('/explore-one')
                  }}
                  className="btn btn-primary rounded-md w-20"
                >
                  <i className="uil uil-process mdi-spin me-1"></i> View More in Our Markeplace!
                </a>
              </div>
            </div>
            {/*end col*/}
          </div>
        </div>
        {/*end container*/}
      </section>
      {/* footer */}
      <Footer />
    </>
  )
}

export default DarkVersionOne
