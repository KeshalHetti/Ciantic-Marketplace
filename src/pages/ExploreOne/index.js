import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'
import {
  bgImage, item1, item2, item3, item4, item5, item6, item7,
  cta
} from '../../components/imageImport'

const ExploreOne = () => {
  const navigate = useNavigate()
  const AuctionData = [
    {
      image: item7,
      title: 'Iphone 14 Pro Max',
      price: 600000,
      quantity: '15 In Stock',
      type: 'electronics',
      filter: ['all', 'electronics'],
    },
    {
      image: item3,
      title: 'Samsung Galaxy S22 Ultra',
      price: 400000,
      quantity: '15 In Stock',
      type: 'electronics',
      filter: ['all', 'electronics'],
    },
    {
      image: item4,
      title: 'Sony a7 III ILCE7M3/B',
      price: 800000,
      quantity: '15 In Stock',
      type: 'electronics',
      filter: ['all', 'electronics'],
    },
    {
      image: item5,
      title: 'Samsung 85-Inch QN900B Neo QLED 8K',
      price: 1636920,
      quantity: '15 In Stock',
      type: 'electronics',
      filter: ['all', 'electronics'],
    },
    {
      image: item6,
      title: 'Google Nest Cam Outdoor or Indoor',
      price: 300000,
      quantity: '15 In Stock',
      type: 'electronics',
      filter: ['all', 'electronics'],
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
        style={{ background: `url(${bgImage}) bottom` }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                  Marketplace
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Explore Ciantic Marketplace!
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
                    href="/index"
                    onClick={e => {
                      e.preventDefault()
                      navigate('/index')
                    }}
                  >
                    Ciantic Market
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Explore
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
          <div className="row justify-content-center mb-4 pb-2">
          <div>
            <SearchBar />
          </div>
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
                    className={`list-inline-item categories position-relative text-dark ${type === 'electronics' ? 'active' : ''
                      }`}
                    // data-group="electronics"
                    onClick={() => setFilter('electronics')}
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
                      <div className="mt-2">
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
          {/*end row*/}

          <div className="row justify-content-center mt-4">
            <div className="col">
              <div className="text-center">
                <a
                  href=""
                  onClick={e => e.preventDefault()}
                  className="btn btn-primary rounded-md"
                >
                  <i className="uil uil-process mdi-spin me-1"></i> Load More
                </a>
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

      <section className="section pt-0 pt-sm-5 mt-0 mt-sm-5">
        <div className="container">
          <div className="bg-black rounded-md p-md-5 p-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="app-subscribe text-center text-md-start">
                    <img src={cta} className="img-fluid" height="120" alt="" />
                  </div>
                </div>
                {/*end col*/}

                <div className="col-lg-8 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title text-center text-md-start ms-xl-5 ms-md-4">
                    <h4 className="display-6 fw-bold text-white title-dark mb-0">
                      Get{' '}
                      <span className="text-gradient-primary fw-bold">
                        Our Premium Tag{' '}
                      </span>{' '}
                      <br /> by Joining Our Subscription
                    </h4>

                    <div className="mt-4">
                      <a
                        href=""
                        onClick={e => e.preventDefault()}
                        className="btn btn-link primary text-white title-dark"
                      >
                        Subscribe Now <i className="uil uil-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end container*/}
          </div>
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* footer */}
      <Footer />
    </>
  )
}

export default ExploreOne
