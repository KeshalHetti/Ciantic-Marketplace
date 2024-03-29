import React from 'react'
import { useNavigate } from 'react-router-dom'
import Countdown from 'react-countdown'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import {
  item1, item2, item3, item4, gif1, gif2, gif3, gif4,
  cta, bg01,
  client01, client02, client03, client04, client09, client11, client12, client13,
} from '../../components/imageImport'

const Auction = () => {
  const navigate = useNavigate()

  const AuctionData = [
    {
      image: item1,
      title: 'Item',
      client: client01,
      author: 'StreetBoy',
      id: 'May 29, 2022 6:0:0'
    },
    {
      image: item1,
      title: 'Item',
      client: client09,
      author: 'PandaOne',
      id: 'June 03, 2022 5:3:1'
    },
    {
      image: item1,
      title: 'Item',
      client: client02,
      author: 'CutieGirl',
      id: 'June 10, 2022 1:0:1'
    },
    {
      image: item1,
      title: 'Item',
      client: client03,
      author: 'NorseQueen',
      id: 'June 18, 2022 1:2:1'
    },
    {
      image: item1,
      title: 'Item',
      author: 'Butterfly',
      client: client11,
      id: 'July 01, 2022 1:6:6'
    },
    {
      image: item1,
      title: 'Item',
      author: 'BigBull',
      client: client04,
      id: 'July 15, 2022 2:5:5'
    },
    {
      image: item1,
      title: 'Item',
      author: 'Princess',
      client: client12,
      id: 'Aug 08, 2022 5:1:4'
    },
    {
      image: item1,
      title: 'Item',
      author: 'KristyHoney',
      client: client13,
      id: 'Aug 20, 2022 1:6:3'
    },
  ]
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
                  Live Auctions
                </h5>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Welcome to Ciantic Marketplace's Live Auction
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
                    Ciantic
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Auction
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
          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
            {AuctionData?.map((data, index) => {
              return (
                <div className="col" key={index}>
                  <div className="card nft-items nft-primary nft-auction rounded-md shadow overflow-hidden mb-1 p-3">
                    <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                      <a
                        href=""
                        onClick={e => {
                          e.preventDefault()
                          navigate('')
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
                          {data?.type}
                        </a>
                      </div>
                      <div className="position-absolute bottom-0 start-0 m-2 h5 bg-gradient-primary text-white title-dark rounded-pill px-3">
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
                        href="/"
                        onClick={e => {
                          e.preventDefault()
                          navigate('')
                        }}
                        className="title text-dark h6"
                      >
                        {data?.title}
                      </a>

                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <div className="">
                          <small className="mb-0 d-block fw-semibold">
                            Current Bid:
                          </small>
                          <small className="rate fw-bold">5000 LKR</small>
                        </div>
                        <a
                          href="/"
                          onClick={e => {
                            e.preventDefault()
                            navigate('')
                          }}
                          className="btn btn-icon btn-pills btn-primary"
                        >
                          <i className="uil uil-shopping-bag"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End */}

      {/* CTA Start */}
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
                        Free collections{' '}
                      </span>{' '}
                      <br /> with your subscription
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
      {/* CTA End */}
      {/* footer */}
      <Footer />
    </>
  )
}

export default Auction
