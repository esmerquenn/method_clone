// Header oluşturma
const headerHTML = `
    <nav onclick="toggle()">
        <div class="nav_menu">
          <div class="lang">
            <button>az</button>
            
            <button>en</button>
            <button class="last">ru</button>
          </div>
          <div class="logos">
            <a class="logo" href="/"><img src="img/MethGdd.png" alt="" /></a>
            <a class="logo_mobile" href="#"><img src="img/İCON/hamburger.png" alt="" /></a>
          </div>
          <div class="menu-div">
            <ul class="menu">
              <li><img class="menu_icon" src="img/İCON/portfolio.png" alt="" /> <a id="portfolio" href="main.html">Design Portfolio</a></li>
              <li><img class="menu_icon" src="img/İCON/constraction.png" alt="" /><a id="repair" href="repair.html">Repair and Construction</a></li>
              <li><img class="menu_icon" src="img/İCON/investment.png" alt="" /><a id="investment" href="investment.html">Investment Projects</a></li>
              <li><img class="menu_icon" src="img/İCON/about.png" alt="" /><a id="about" href="about.html">About Us</a></li>
              <li><img class="menu_icon" src="img/İCON/contact.png" alt="" /><a id="contact" href="contact.html">Contact</a></li>
          </ul>
          
          </div>
        </div>
      </nav>
`;

// Footer oluşturma
const footerHTML = `
     <footer class="container">
      <section id="carousel" class="slider_div">
        <div class="slider">
          <div class="owl-carousel owl-theme">
            <div class="item">
              <div class="card">
                <img src="img/MethGdd.png" alt="" />
              </div>
              <div class="line"></div>
            </div>
            <div class="item">
              <div class="card">
                <img src="img/MethGdd.png" alt="" />
              </div>
              <div class="line"></div>
            </div>
            <div class="item">
              <div class="card">
                <img src="img/MethGdd.png" alt="" />
              </div>
              <div class="line"></div>
            </div>
            <div class="item">
              <div class="card">
                <img src="img/MethGdd.png" alt="" />
              </div>
              <div class="line"></div>
            </div>
            <div class="item">
              <div class="card">
                <img src="img/MethGdd.png" alt="" />
              </div>
              <div class="line"></div>
            </div>
            <div class="item">
              <div class="card">
                <img src="img/MethGdd.png" alt="" />
              </div>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </section>
      <div class="foot_div">
        <div class="foot">
          <div class="icons">
            <img src="img/behance.png" alt="" />
            <img src="img/instagram.png" alt="" />
            <img src="img/facebook.png" alt="" />
            <img src="img/phone.png" alt="" />
            <img src="img/pinterest.png" alt="" />
            <img src="img/linkedin.png" alt="" />
          </div>
          <a href="mailto:methGdd@gmail.com">MethGdd@gmail.com</a>
        </div>
      </div>
    </footer>
`;

// Sayfaya header ve footer'ı ekleme
// document.header.insertAdjacentHTML("afterbegin", headerHTML); // Sayfanın başına ekleme
// document.body.insertAdjacentHTML("beforeend", footerHTML); // Sayfanın sonuna ekleme
document.body.insertAdjacentHTML("beforeend", footerHTML); // Footeri body'nin sonuna ekleme

// Headeri document.body'nin başına eklemek yerine header tag'i içine eklemek için header tag'i seçiyoruz
const headerContainer = document.querySelector("header");
headerContainer.innerHTML = headerHTML + headerContainer.innerHTML;
