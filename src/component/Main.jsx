import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { MenuOutlined } from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons";
import { HeartOutlined } from "@ant-design/icons";
import { EyeOutlined } from "@ant-design/icons";
import { StarOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import { PhoneOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { LinkedinOutlined } from "@ant-design/icons";
import { YoutubeOutlined } from "@ant-design/icons";



export default Main;
function Main() {
  return (
    <div>
      <header className="header">
        <Link to="/" className="logo">
          <img src="./img/logo.png" alt="logo" />
        </Link>
        <nav className="navbar">
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/Product">Product</Link>
          <Link to="/Review">Review</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Blogs">Blogs</Link>
        </nav>
        <div className="icons">
          <div>
            <SearchOutlined id="search-btn" />
          </div>
          <div>
            <ShoppingCartOutlined id="cart-btn" />
          </div>
          <div>
            <MenuOutlined id="menu-btn" />
          </div>
        </div>
        <div className="seacrch-form">
          <input type="search" id="search-box" placeholder="search here..." />
          <label for="search-box">
            <SearchOutlined />
          </label>
        </div>
        <div className="cart-items-container">
          <div className="cart-items">
            <span>
              <CloseOutlined id="fa-times" />
            </span>
            <img src="./img/cart-item-1.png" alt="" />
            <div className="content">
              <h3>cart item 01</h3>
              <div className="price">$15.99</div>
            </div>
          </div>
          <div className="cart-items">
            <span>
              <CloseOutlined id="fa-times" />
            </span>
            <img src="./img/cart-item-2.png" alt="" />
            <div className="content">
              <h3>cart item 02</h3>
              <div className="price">$15.99</div>
            </div>
          </div>
          <div className="cart-items">
            <span>
              <CloseOutlined id="fa-times" />
            </span>
            <img src="./img/cart-item-3.png" alt="" />
            <div className="content">
              <h3>cart item 03</h3>
              <div className="price">$15.99</div>
            </div>
          </div>
          <div className="cart-items">
            <span>
              <CloseOutlined id="fa-times" />
            </span>
            <img src="./img/cart-item-4.png" alt="" />
            <div className="content">
              <h3>cart item 04</h3>
              <div className="price">$15.99</div>
            </div>
          </div>
          <Link to="/" className="btn">
            Checkout now
          </Link>
        </div>
      </header>
      {/* home */}
      <section className="home" id="home">
        <div className="content">
          <h3>fresh coffee in the morning</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cum
            culpa doloremque nesciunt expedita architecto, nostrum ipsum facere,
            porro placeat vero nulla debitis id temporibus sit quas deserunt.
            Amet, quo!
          </p>
          <Link to="/" className="btn">
            get your now
          </Link>
        </div>
      </section>
      {/* end Home
          about */}
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span>us
        </h1>
        <div className="row">
          <div className="image">
            <img src="./img/about-img.jpeg" alt="" />
          </div>
          <div className="content">
            <h3>What makes our coffee special?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              pariatur incidunt ab voluptas tenetur assumenda velit hic, sint,
              fugiat dignissimos doloremque quasi, voluptatibus eum! Beatae unde
              corrupti non fuga mollitia.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              itaque accusamus atque dolor perferendis fugit! Similique natus
              asperiores reprehenderit amet maxime error a neque. Doloribus
              saepe unde blanditiis repudiandae fugit.
            </p>
            <Link to="/" className="btn">
              learn more
            </Link>
          </div>
        </div>
      </section>
      {/* end about
          menu */}
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="./img/menu-1.png" alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <Link to="/" className="btn">
              add to cart
            </Link>
          </div>
          <div className="box">
            <img src="./img/menu-2.png" alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <Link to="/" className="btn">
              add to cart
            </Link>
          </div>
          <div className="box">
            <img src="./img/menu-3.png" alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <Link to="/" className="btn">
              add to cart
            </Link>
          </div>
          <div className="box">
            <img src="./img/menu-4.png" alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <Link to="/" className="btn">
              add to cart
            </Link>
          </div>
          <div className="box">
            <img src="./img/menu-5.png" alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <Link to="/" className="btn">
              add to cart
            </Link>
          </div>
          <div className="box">
            <img src="./img/menu-6.png" alt="" />
            <h3>tasty and healty</h3>
            <div className="price">
              $15.99 <span>20.99</span>
            </div>
            <Link to="/" className="btn">
              add to cart
            </Link>
          </div>
        </div>
      </section>
      {/* end menu
          product */}
      <section className="products" id="product">
        <h1 className="heading">
          our <span>product</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="icons">
              <Link to="/">
                <ShoppingCartOutlined />
              </Link>
              <Link to="/">
                <HeartOutlined />
              </Link>
              <Link to="/">
                <EyeOutlined />
              </Link>
            </div>
            <div className="image">
              <img src="./img/product-1.png" alt="" />
            </div>
            <div className="content">
              <h3>fresh coffee</h3>
              <div className="stars">
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
              </div>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <Link to="/">
                <ShoppingCartOutlined />
              </Link>
              <Link to="/">
                <HeartOutlined />
              </Link>
              <Link to="/">
                <EyeOutlined />
              </Link>
            </div>
            <div className="image">
              <img src="./img/product-2.png" alt="" />
            </div>
            <div className="content">
              <h3>fresh coffee</h3>
              <div className="stars">
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
              </div>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icons">
              <Link to="/">
                <ShoppingCartOutlined />
              </Link>
              <Link to="/">
                <HeartOutlined />
              </Link>
              <Link to="/">
                <EyeOutlined />
              </Link>
            </div>
            <div className="image">
              <img src="./img/product-3.png" alt="" />
            </div>
            <div className="content">
              <h3>fresh coffee</h3>
              <div className="stars">
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
              </div>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end product
          review */}
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="./img/quote-img.png" alt="" className="quote" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quae sint, consequatur ullam quod necessitatibus, voluptatum
              adipisci quidem minima delectus ad maiores odio, facere veritatis
              laudantium? Recusandae excepturi sit quos?
                      </p>
                      <img src="./img/pic-1.png" className="user" alt="" />
                      <h3>Bảo Long</h3>
                      <div className="stars">
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
              </div>
                  </div>
                  <div className="box">
            <img src="./img/quote-img.png" alt="" className="quote" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quae sint, consequatur ullam quod necessitatibus, voluptatum
              adipisci quidem minima delectus ad maiores odio, facere veritatis
              laudantium? Recusandae excepturi sit quos?
                      </p>
                      <img src="./img/pic-2.png" className="user" alt="" />
                      <h3>Thanh Nhi</h3>
                      <div className="stars">
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
              </div>
          </div>
          <div className="box">
            <img src="./img/quote-img.png" alt="" className="quote" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quae sint, consequatur ullam quod necessitatibus, voluptatum
              adipisci quidem minima delectus ad maiores odio, facere veritatis
              laudantium? Recusandae excepturi sit quos?
                      </p>
                      <img src="./img/pic-3.png" className="user" alt="" />
                      <h3>Gnol</h3>
                      <div className="stars">
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
                <i>
                  <StarOutlined />
                </i>
              </div>
          </div>
        </div>
          </section>
          {/* end review
          contact */}
          <section className="contact" id="contact">
              <h1 className="heading"><span>contact</span> us</h1>
              <div className="row">
              <iframe
          class="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9184659261323!2d106.63840031428676!3d10.740767262789134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e7b2a19979b%3A0xe90d60e621f86cb5!2zNTUxLzUgxJDGsOG7nW5nIFBo4bqhbSBWxINuIENow60sIFBoxrDhu51uZyA3LCBRdeG6rW4gNiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1657308919303!5m2!1svi!2s"
          allowfullscreen=""
          loading="lazy"
                  ></iframe>
                  <form action="">
                      <h3>get in touch</h3>
                      <div className="inputBox">
                          <span><UserOutlined /></span>
                          <input type="text" placeholder="name" />
                      </div>
                      <div className="inputBox">
                          <span><MailOutlined /></span>
                          <input type="email" placeholder="email" />
                      </div>
                      <div className="inputBox">
                          <span><PhoneOutlined /></span>
                          <input type="number" placeholder="number" />
                      </div>
                      <input type="submit" value="contact now" className="btn" />
                  </form>
              </div>
          </section>
          {/* end contact
          blogs */}
          <section className="blogs" id="blogs">
              <h1 className="heading">our <span>blogs</span></h1>
              <div className="box-container">
                  <div className="box">
                      <div className="image">
                      <img src="./img/blog-1.jpeg" alt="" />
                      </div>
                      <div className="content">
                          <Link to='/' className="title">tasty and refreshing coffee</Link>
                          <span>by admin / 21st may, 2021</span>
                          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium culpa corporis magnam.
                          </p>
                          <Link to='/' className="btn">read more</Link>
                      </div>
                  </div>
                  <div className="box">
                      <div className="image">
                      <img src="./img/blog-2.jpeg" alt="" />
                      </div>
                      <div className="content">
                          <Link to='/' className="title">tasty and refreshing coffee</Link>
                          <span>by admin / 21st may, 2021</span>
                          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium culpa corporis magnam.
                          </p>
                          <Link to='/' className="btn">read more</Link>
                      </div>
                  </div>
                  <div className="box">
                      <div className="image">
                      <img src="./img/blog-3.jpeg" alt="" />
                      </div>
                      <div className="content">
                          <Link to='/' className="title">tasty and refreshing coffee</Link>
                          <span>by admin / 21st may, 2021</span>
                          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium culpa corporis magnam.
                          </p>
                          <Link to='/' className="btn">read more</Link>
                      </div>
                  </div>
              </div>
          </section>
          {/* end blogs
          footer */}
          <section className="footer">
              <div className="share">
                  <Link to='/'><FacebookOutlined /></Link>
                  <Link to='/'><TwitterOutlined /></Link>
                  <Link to='/'><InstagramOutlined /></Link>
                  <Link to='/'><LinkedinOutlined /></Link>
                  <Link to='/'><YoutubeOutlined /></Link>
              </div>
              <div className="links">
                  <Link to='/home'></Link>
                  <Link to='/about'></Link>
                  <Link to='/menu'></Link>
                  <Link to='/product'></Link>
                  <Link to='/review'></Link>
                  <Link to='/contact'></Link>
                  <Link to='/blogs'></Link>
              </div>
          </section>
    </div>
  );
}
