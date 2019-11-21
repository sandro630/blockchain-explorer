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
            <a className="btc-link" routerLink="/">
              BTC 
            </a>
            <a className="btc-pro-link" routerLink="/">
              +4.72%
            </a>
        </div>
      </div>
      <div className="menu-section">
        <div className="news-dropdown">
            <button aria-label="news" routerLink="/news">
              News<i className="fa fa-caret-down icon__arrow-drop-down--white" aria-hidden="true"></i>
            </button>
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
        <button aria-label="prices" mat-flat-button routerLink="/prices">
          Charts
        </button>
        <button aria-label="" mat-flat-button routerLink="/">
          Explorer
        </button>
        <button aria-label="" mat-flat-button routerLink="/faucet">
          Faucet
        </button>
        <button aria-label="" mat-flat-button routerLink="/advertise">
          Advertise
        </button>
        <button aria-label="" mat-flat-button routerLink="/press-release-submission">
          Press Releases
        </button>
        <div className="subscribe-section">
          <button aria-label="" className="subscribe-btn">
            Subscribe
          </button>
          <button id="sidenav-toggle">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
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
        </div>
      </div>

    </div>
  </nav>
  {/* <div className="ct-sidenav">
      <button className="close">×</button>
      <h1 className="ct-sidenav-logo"><a routerLink="/">BTC&nbsp;TIMES</a></h1>
       <ul className="list-unstyled ct-sidenav-list">
          <li>
              <a className="news-link">
                <p>
                    News
                </p>
                <mat-icon className="news-link__dropdown">arrow_drop_down</mat-icon>
              </a>
              <div className="dropdown-container">
                <a routerLink="/news">Blockchain</a>
                <a routerLink="/news">Dark Web</a>
                <a routerLink="/news">Featured</a>
                <a routerLink="/news">Bitcoin</a>
                <a routerLink="/news">Mining</a>
                <a routerLink="/news">Adoption</a>
                <a routerLink="/news">Payments</a>
                <a routerLink="/news">Inversting</a>
                <a routerLink="/news">Startup</a>
                <a routerLink="/news">Scams</a>
                <a routerLink="/news">Bitcoin</a>
              </div>
          </li>
          <li>
              <a routerLink="/prices">Charts</a>
          </li>
          <li>
              <a routerLink="/">Explorer</a>
          </li>           
          <li>
              <a routerLink="/faucet">Faucet</a>
          </li>
          <li>
              <a routerLink="/advertise">Advertise</a>
          </li>
          <li>
              <a routerLink="/press-release-submission">Press Releases</a>
          </li>
      </ul>
      <div className="inner">
        <div>
          <a className="btc-link" routerLink="/">
          </a>
        </div>
        <button aria-label="" className="subscribe-btn" mat-stroked-button>
          Subscribe
        </button>
      </div>
  </div> */}
</header>
