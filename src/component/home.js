import './../App.css';
import {NavLink} from "react-router-dom";
import BG_Banner from './../assets/BG_Banner.png';
import bsc from './../assets/bsc.png';
import btc from './../assets/btc.png';
import btn from './../assets/btn.png';
import card_img from './../assets/card-img.png';
import circle_rotate from './../assets/circle-rotate.png';
import coin from './../assets/coin.png';
import eth from './../assets/eth.png';
import tether_usdt from './../assets/tether-usdt.png';


function home() {
  return (
    <>
    <div className="section1">
        <div className="content">
          <div className="img">
            <img src={BG_Banner} alt="" />
          </div>
          <div className="text">
            <h1>Best Crypto Swap For You</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="buttons">
              <button className="btn gldn">Enter App</button>
              <button className="btn gldn-border">Learn More</button>
            </div>
          </div>
        </div>
      </div><div className="section2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6 data">
              <h2>$1.52</h2>
              <p>CyCoin Price</p>
            </div>
            <div className="col-md-3 col-6 data">
              <h2>$1.97b</h2>
              <p>Total Liquidity</p>
            </div>
            <div className="col-md-3 col-6 data">
              <h2>$220.93b</h2>
              <p>Total Volume</p>
            </div>
            <div className="col-md-3 col-6 data">
              <h2>14.15k</h2>
              <p>Total Pairs</p>
            </div>
          </div>
        </div>
      </div><div className="section3">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 text">
              <h1>A growing network of DeFi Crypto Pairs.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="col-md-6 img">
              <div className="img">
                <img src={circle_rotate} alt=""/></div>
            </div>
          </div>
        </div>
      </div><div className="section4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 img">
              <img src={card_img} alt="" /></div>
            <div className="col-md-6 text">
              <h1>Best Platform For Cryptocurrency Swap</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="btn gldn">Get Started</button>
            </div>
          </div>
        </div>
      </div><div className="section5">
        <div className="container">
          <div className="textarea">
            <h1>Best Popular Crypto Pair On CYSwap</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="pair-grid row">
            <div className="col-md-6 pair">
              <div className="pair-card row ">
                <div className="item1 col-4 d-flex">
                  <div className="img">
                    <img src={coin} alt=""/></div>
                  <div className="txt">
                    <h5>CyCoin</h5>
                    <p>CYY</p>
                  </div>
                </div>
                <div className="img2 col-4">
                  <img src={btn} alt=""/></div>
                <div className="3 col-4 d-flex">
                  <div className="img">
                    <img src={eth} alt=""/></div>
                  <div className="txt">
                    <h5>Ethereum</h5>
                    <p>ETH</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 pair">
              <div className="pair-card row ">
                <div className="item1 col-4 d-flex">
                  <div className="img">
                    <img src={coin} alt=""/></div>
                  <div className="txt">
                    <h5>CyCoin</h5>
                    <p>CYY</p>
                  </div>
                </div>
                <div className="img2 col-4">
                  <img src={btn} alt=""/></div>
                <div className="3 col-4 d-flex">
                  <div className="img">
                    <img src={btc} alt=""/></div>
                  <div className="txt">
                    <h5>BitCoin</h5>
                    <p>btc</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 pair">
              <div className="pair-card row ">
                <div className="item1 col-4 d-flex">
                  <div className="img">
                    <img src={eth} alt=""/></div>
                  <div className="txt">
                    <h5>Ethereum</h5>
                    <p>ETH</p>
                  </div>

                </div>
                <div className="img2 col-4">
                  <img src={btn} alt=""/></div>
                <div className="3 col-4 d-flex">
                  <div className="img">
                    <img src={coin} alt=""/></div>
                  <div className="txt">
                    <h5>CyCoin</h5>
                    <p>CYY</p>
                  </div>
                </div>
              </div>


            </div>
            <div className="col-md-6 pair">
              <div className="pair-card row ">
                <div className="item1 col-4 d-flex">
                  <div className="img">
                    <img src={tether_usdt} alt=""/></div>
                  <div className="txt">
                    <h5>Tether</h5>
                    <p>USDT</p>
                  </div>

                </div>
                <div className="img2 col-4">
                  <img src={btn} alt=""/></div>
                <div className="3 col-4 d-flex">
                  <div className="img">
                    <img src={eth} alt=""/></div>
                  <div className="txt">
                    <h5>Ethereum</h5>
                    <p>eth</p>
                  </div>
                </div>
              </div>


            </div>
            <div className="col-md-6 pair">
              <div className="pair-card row ">
                <div className="item1 col-4 d-flex">
                  <div className="img">
                    <img src={bsc} alt=""/></div>
                  <div className="txt">
                    <h5>Binance</h5>
                    <p>BNB</p>
                  </div>

                </div>
                <div className="img2 col-4">
                  <img src={btn} alt=""/></div>
                <div className="3 col-4 d-flex">
                  <div className="img">
                    <img src={btc} alt=""/></div>
                  <div className="txt">
                    <h5>BitCoin</h5>
                    <p>BTC</p>
                  </div>
                </div>
              </div>


            </div>
            <div className="col-md-6 pair">
              <div className="pair-card row ">
                <div className="item1 col-4 d-flex">
                  <div className="img">
                    <img src={btc} alt=""/></div>
                  <div className="txt">
                    <h5>Bitcoin</h5>
                    <p>BTC</p>
                  </div>

                </div>
                <div className="img2 col-4">
                  <img src={btn} alt=""/></div>
                <div className="3 col-4 d-flex">
                  <div className="img">
                    <img src={tether_usdt} alt=""/></div>
                  <div className="txt">
                    <h5>Tether</h5>
                    <p>USDT</p>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>
      </div><div className="section6">
        <div className="container">
          <div className="textarea">
            <h1>How to use CySwap?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <br/>
            <div className="row">
              <div className="col-md-3 col-6 data">
                <div className="circle d-flex align-items-center"><h4>01</h4></div>
                <h5>Pick a Crypto</h5>
                <p>Choose the exchange pair</p>
              </div>
              <div className="col-md-3 col-6 data">
                <div className="circle d-flex align-items-center"><h4>02</h4></div>
                <h5>Connect Wallet</h5>
                <p>Connect the wallet CySwap to Send Exchange</p>
              </div>
              <div className="col-md-3 col-6 data">
                <div className="circle d-flex align-items-center"><h4>03</h4></div>
                <h5>Send the Deposit</h5>
                <p>Sent in the amount of rupto needed for exchange</p>
              </div>
              <div className="col-md-3 col-6 data">
                <div className="circle d-flex align-items-center"><h4>04</h4></div>
                <h5>Receive Funds</h5>
                <p>Get exchanged cryptocurrency</p>
              </div>
            </div>
          </div>
      </div><div className="footer">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 footer-col">
                <div className="navbar-brand">
                  <h2 className="d-flex align-items-center">CyC<img src={coin} alt=""/>IN</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="col-md-3 col-sm-6 footer-col">
                <h5>Quick Links</h5>
                <ul>
                  <li><NavLink to="">Tokenomics</NavLink></li>
                  <li><NavLink to="">Roadmap</NavLink></li>
                  <li><NavLink to="">Team</NavLink></li>
                  <li><NavLink to="">How?</NavLink></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 footer-col">
                <h5>Resources</h5>
                <ul>
                  <li><NavLink to="">About Us</NavLink></li>
                  <li><NavLink to="">Contact Us</NavLink></li>
                  <li><NavLink to="">Help Center</NavLink></li>
                  <li><NavLink to="">Blogs</NavLink></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 footer-col">
                <h5>Stay up to date</h5>
                <p>Stay updated with CyCoins news, Zero Spam, we promise</p>
                <div className="social d-flex justify-content-start">
                  <i className="bi bi-instagram d-flex"></i>
                  <i className="bi bi-twitter d-flex"></i>
                  <i className="bi bi-youtube d-flex"></i>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="left d-flex col-md-6"> &copy; 2022 <h5> CYCOIN.</h5> All rights reserved</div>
              <div className="links d-flex col-md-6">
                <NavLink to=""> Terms & Conditions</NavLink> <p>|</p> <NavLink to="">Privacy Policy</NavLink></div>
            </div>
          </div>
        </div>
      </div></>
  );
}

export default home;
