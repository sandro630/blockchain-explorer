import Snabbdom from 'snabbdom-pragma'

export default S =>
<header>
  <nav>
    <div className="nav">
      <div className="logo-section">
        <div>
          <a className="home-link" href="https://dev.btctimes.com/">
            BTC TIMES
          </a>
        </div>
        <div className="brti">
            <a className="btc-link" href="/">
            </a>
            <a className="btc-pro-link" href="/">
            </a>
        </div>
      </div>
      <div className="section-right">
        <div className="menu-section">
          <div className="news-dropdown">
              <a aria-label="news">
                News<i className="fa fa-caret-down icon__arrow-drop-down--white" aria-hidden="true"></i>
              </a>
              <div className="news-dropdown-content">
                <div className="news-dropdown-item">
                    <a href="#">Blockchain</a>
                </div>
                <div className="news-dropdown-item">
                    <a href="#">Dark Web</a>
                </div>
                <div className="news-dropdown-item">
                    <a href="#">Featured</a>
                </div>
                <div className="news-dropdown-item">
                    <a href="#">Bitcoin</a>
                </div>
                <div className="news-dropdown-item">
                    <a href="#">Mining</a>
                </div>
                <div className="news-dropdown-item">
                    <a href="#">Adoption</a>
                </div>
                <div className="news-dropdown-item">
                    <a href="#">Payments</a>
                </div>
                <div className="news-dropdown-item">
                    <a href="#">Inversting</a>
                </div>
                <div className="news-dropdown-item">
                    <a href="#">Startup</a>
                </div>
                <div className="news-dropdown-item">
                    <a href="#">Scams</a>
                </div>
                <div className="news-dropdown-item">
                    <a href="#">Bitcoin</a>
                </div>
              </div>
          </div>
          <a aria-label="prices" href="https://dev.btctimes.com/prices">
            Charts
          </a>
          <a aria-label="" href="/">
            Explorer
          </a>
          <a aria-label="" href="https://dev.btctimes.com/faucet">
            Faucet
          </a>
          <a aria-label="" href="https://dev.btctimes.com/advertise">
            Advertise
          </a>
          <a aria-label="" href="https://dev.btctimes.com/press-release-submission">
            Press Releases
          </a>
          <div className="subscribe-section">
            <button aria-label="" className="subscribe-btn">
              Subscribe
            </button>
          </div>
        </div>
        <div id="search-input" className="b-nav-search">
            <i className="fa fa-search" aria-hidden="true"></i>
            <div className="b-nav-search__form-wrap">
                <form action="/search" id="search" role="search" method="get" className="b-nav-search__form js-open">
                    <div className="b-nav-search__fields">
                        <input type="text" id="searchquery" name="query" placeholder="" autocomplete="off" className="b-nav-search__input b-nav-search__input_text" /> 
                        <input type="submit" value="Search" className="b-nav-search__input b-nav-search__input_submit" />
                    </div>
                </form>
            </div>
        </div>
        <button id="sidenav-toggle">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
    </div>
    
    </div>
  </nav>
  <div className="ct-sidenav">
      <button className="close">×</button>
      <h1 className="ct-sidenav-logo"><a href="https://dev.btctimes.com/">BTC&nbsp;TIMES</a></h1>
       <ul className="list-unstyled ct-sidenav-list">
          <li>
              <a className="news-link" id="mobileNewsLink">
                <p>
                    News
                </p>
                <i className="fa fa-caret-down icon__arrow-drop-down--white" aria-hidden="true"></i>
              </a>
              <div className="dropdown-container">
                <a href="/">Blockchain</a>
                <a href="/">Dark Web</a>
                <a href="/">Featured</a>
                <a href="/">Bitcoin</a>
                <a href="/">Mining</a>
                <a href="/">Adoption</a>
                <a href="/">Payments</a>
                <a href="/">Inversting</a>
                <a href="/">Startup</a>
                <a href="/">Scams</a>
                <a href="/">Bitcoin</a>
              </div>
          </li>
          <li>
              <a href="https://dev.btctimes.com/prices">Charts</a>
          </li>
          <li>
              <a href="/">Explorer</a>
          </li>           
          <li>
              <a href="https://dev.btctimes.com/faucet">Faucet</a>
          </li>
          <li>
              <a href="https://dev.btctimes.com/advertise">Advertise</a>
          </li>
          <li>
              <a href="https://dev.btctimes.com/press-release-submission">Press Releases</a>
          </li>
      </ul>
      <div className="inner">
        <div className="brti">
            <a className="btc-link" href="/">
            </a>
            <a className="btc-pro-link" href="/">
            </a>
        </div>
        <div className="subscribe-section">
          <button aria-label="" className="subscribe-btn">
            Subscribe
          </button>
        </div>
      </div>
  </div>
</header>
