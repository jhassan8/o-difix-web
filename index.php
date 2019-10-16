<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Difix</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
    <link rel="stylesheet" href="css/slick.css">
    <link href="css/difix.css" rel="stylesheet">
  </head>
  <body>


<!-- ------------------------------------------------------------- -->
<!-- este contenido se debe remover solo es para crear loops mocks -->
<!-- ------------------------------------------------------------- -->
<script>function repeat(e,n,l,t,r,a){let c="",i=document.getElementsByClassName(e)[0],d="";for(let e=0;e<l;e++)d+=r.replace(/{{index}}/g,e+1);for(let e=0;e<n;e++)c+=t.replace(/{{index}}/g,e+1)+d+a.replace(/{{index}}/g,e+1);i.innerHTML=c}</script>
<!-- ------------------------------------------------------------- -->
<!-- este contenido se debe remover solo es para crear loops mocks -->
<!-- ------------------------------------------------------------- -->


    <header>
      <div class="nav">
        <a class="logo" href="#">
          <img src="img/logo.png">
        </a>
        <ul class="mobile">
          <li>
            <a class="menu">Explore</a>
            <div class="submenu">
              <ul>
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Series</a></li>
                <li><a href="#">Recently added</a></li>
                <li><a href="#">My List</a></li>
              </ul>
            </div>
          </li>
        </ul>
        <ul class="desktop">
          <li class="active"><a class="link" href="#">Home</a></li>
          <li><a class="link" href="#">Movies</a></li>
          <li><a class="link" href="#">Series</a></li>
          <li><a class="link" href="#">Recently added</a></li>
          <li><a class="link" href="#">My List</a></li>
        </ul>
      </div>
      <ul class="tools">
        <li class="search">
          <a class="s-open"><i class="fas fa-search"></i></a>
          <input type="text" name="" placeholder="titles, peoples, genres">
          <a class="s-close"><i class="fas fa-times"></i></a>
        </li>
        <li><a href="#"><i class="fas fa-user"></i></a></li>
        <!-- <li><a href="#"><i class="fas fa-sign-in-alt" style="font-size:20px"></i></a></li> -->
      </ul>
    </header>
    <section class="outstanding_section">
      <div class="image">
        <img src="img/back.jpg">
      </div>
      <div class="player">
        <video>
          <source src="img/video.mp4" type="video/mp4">
        </video>
      </div>
      <div class="gradient"></div>
      <div class="info">
        <div class="title">
          <img src="img/title.png">
        </div>
        <div class="buttons">
          <a href="#"><i class="fas fa-play"></i><span>Play</span></a>
          <a href="#"><i class="fas fa-plus"></i><span>My List</span></a>
        </div>
        <div class="synopsis">Estuvo desaparecida durante siete años. Ahora está de vuelta, con misteriosos poderes, y recluta a cinco extraños para una misión secreta.</div>
      </div>
    </section>
    <section class="my_section">

<!-- ------------------------------------------------------------- -->
<!-- este contenido se debe remover solo es para crear loops mocks -->
<!-- ------------------------------------------------------------- -->
<script>repeat('my_section', 30, 30, 


`
      <div class="row">
        <div class="row-elements">
          <div class="category">Category {{index}}</div>
          <div class="previous" carousel={{index}}>
            <i class="fas fa-angle-left"></i>
          </div>
          <div class="next" carousel={{index}}>
            <i class="fas fa-angle-right"></i>
          </div>
          <div class="carousel-i" id="carousel-i{{index}}">';
`

,


`
            <div class="item">
              <div class="poster">
                <img data-lazy="https://via.placeholder.com/130x200/7c7c7c/fff?text={{index}}">
              </div>
              <a class="details">
                <div class="title">
                  Name
                </div>
                <a class="info">info</a>
              </a>
            </div>
`

,


`
          </div>
        </div>
        <div class="details-select">
          <div class="image"></div>
          <div class="player">
            <video></video>
          </div>
          <div class="gradient"></div>
          <a class="close"><i class="fas fa-times"></i></a>
          <div class="title"></div>
          <div class="tabs-contents">
            <div class="tab-content info">
              <div class="buttons">
                <a href="#"><i class="fas fa-play"></i><span>Play</span></a>
                <a href="#"><i class="fas fa-plus"></i></a>
              </div>
              <div class="synopsis"></div>
            </div>
            <div class="tab-content episodes">
              <div class="seasons-row">
                <div class="select">
                  <select>
                    <option value="1">Season 1</option>
                    <option value="2">Season 2</option>
                    <option value="3">Season 3</option>
                  </select>
                </div>
              </div>
              <div class="episodes-row"></div>
            </div>
            <!-- <div class="tab-content details"></div> -->
          </div>
          <div class="tabs">
            <div class="labels"></div>
          </div>
        </div>
      </div>
`

);</script>
<!-- ------------------------------------------------------------- -->
<!-- este contenido se debe remover solo es para crear loops mocks -->
<!-- ------------------------------------------------------------- -->


    </section>
    <!-- <section class="categories_section"></section> -->
    <footer>
      <div class="socials">
        <a href=""><i class="fab fa-facebook-square"></i></a>
        <a href=""><i class="fab fa-instagram"></i></a>
        <a href=""><i class="fab fa-twitter"></i></a>
        <a href=""><i class="fab fa-youtube"></i></a>
      </div>
      <div class="copyright">© 2016 Difix All Rights Reserved</div>
    </footer>
    <script src="js/jquery.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/difix.js"></script>
    <script src="http://livejs.com/live.js"></script>
  </body>
</html>
