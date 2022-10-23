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
import Box from "./Box";
import Product from "./Product";
import Customs from "./Customs";
import Blogs from "./Blogs";

export default Main;
function Main() {
  return (
    <div>
      <header className="header">
        <a href="#home" className="logo">
          <img src="./img/logo.png" alt="logo" />
        </a>
        <nav className="navbar">
          <a href="#home">Trang chủ</a>
          <a href="#about">Giới thiệu</a>
          <a href="#menu">Thực đơn</a>
          <a href="#product">Sản phẩm</a>
          <a href="#review">Đánh giá</a>
          <a href="#contact">Liên hệ</a>
          <a href="#blogs">Bài viết</a>
        </nav>
        <div className="icons">
          <div>
            <ShoppingCartOutlined id="cart-btn" /> 
          </div>
          <strong>0</strong>
        </div>
        {/* <div className="seacrch-form">
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
        </div> */}
      </header>
      {/* home */}
      <section className="home" id="home">
        <div className="content">
          <h3>Một tách cà phê vào buổi sáng</h3>
          <p>
            Một tách cà phê vào buổi sáng giúp bạn tỉnh táo và tăng khả năng tập
            trung của não bộ. Tuy nhiên, uống cafe buổi sáng có tốt không là
            thắc mắc của rất nhiều người.
          </p>
        </div>
      </section>
      {/* end Home
          about */}
      <section className="about" id="about">
        <h1 className="heading">
          <span>Về</span> Chúng tôi
        </h1>
        <div className="row">
          <div className="image">
            <img src="./img/about-img.jpeg" alt="" />
          </div>
          <div className="content">
            <h3>Cafe của chúng tôi có gì đặc biệt</h3>
            <p>
              Đặc biệt là chúng tôi đã dày công nguyên cứu, tìm ra công thức
              rang riêng. Công thức ấy dành riêng cho các bạn trẻ. Các bạn sẽ tự
              cảm nhận cái đặc biệt trong vị cà phê mà chúng tôi dành cho các
              bạn. Với chúng tôi đó là công thức rang, còn với các bạn nó là một
              hàm số với nhiều biến.
            </p>
            <p>
              Đơn giản cà phê đặc biệt là một cái tên đặc biệt dành cho các bạn.
              Cà phê đặc biệt là cà phê rang xay nguyên chất 100%. Đạt tiêu
              chuẩn UTZ, truy xuất nguồn gốc toàn cầu.
            </p>
            <a href="#" className="btn">
              Đọc thêm
            </a>
          </div>
        </div>
      </section>
      {/* end about
          menu */}
      <section className="menu" id="menu">
        <h1 className="heading">
          thực đơn <span>của chúng tôi</span>
        </h1>
        <div className="box-container">
          <Box
            img="./img/menu-1.png"
            name="Cafe sữa"
            price="29.000"
            btn="đặt ngay"
          />
          <Box
            img="./img/menu-2.png"
            name="Cafe đen"
            price="25.000"
            btn="đặt ngay"
          />
          <Box
            img="./img/menu-3.png"
            name="latte"
            price="35.000"
            btn="đặt ngay"
          />
          <Box
            img="./img/menu-4.png"
            name="Cappuchino"
            price="35.000"
            btn="đặt ngay"
          />
          <Box
            img="./img/menu-5.png"
            name="Choco latte"
            price="45.000"
            btn="đặt ngay"
          />
          <Box
            img="./img/menu-6.png"
            name="Bạc xỉu"
            price="29.000"
            btn="đặt ngay"
          />
        </div>
      </section>
      {/* end menu
          product */}
      <section className="products" id="product">
        <h1 className="heading">
          Sản Phẩm <span>của chúng tôi</span>
        </h1>
        <div className="box-container">
          <Product
            img="./img/product-1.png"
            name="Robusta"
            price="139.000"
            prices="159.000"
          />
          <Product
            img="./img/product-2.png"
            name="Arabica"
            price="239.000"
            prices="259.000"
          />
          <Product
            img="./img/product-3.png"
            name="Culi"
            price="299.000"
            prices="319.000"
          />
        </div>
      </section>
      {/* end product
          review */}
      <section className="review" id="review">
        <h1 className="heading">
          Khách hàng <span>đánh giá</span>
        </h1>
        <div className="box-container">
          <Customs
            img="./img/quote-img.png"
            ctn="Rất hài lòng về sản phẩm và cách chăm sóc khách hàng."
            avt="./img/pic-1.png"
            name="Bảo Long"
          />
          <Customs
            img="./img/quote-img.png"
            ctn="Mình rất hài lòng vì được CaFeNa tư vấn những sản phẩm tốt, phù hợp với nhu cầu của mình, giá cả phải chăng, Nhân viên hỗ trợ rất nhiệt tình."
            avt="./img/pic-2.png"
            name="Thanh Nhi"
          />
          <Customs
            img="./img/quote-img.png"
            ctn="Tôi luôn tin tưởng vào sản phẩm dịch vụ của CaFeNa và sẽ tiếp tục sử dụng dịch vụ của CaFeNa trong thời gian tới"
            avt="./img/pic-3.png"
            name="Gnol"
          />
        </div>
      </section>
      {/* end review
          contact */}
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>liên hệ</span> với chúng tôi
        </h1>
        <div className="row">
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9184659261323!2d106.63840031428676!3d10.740767262789134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e7b2a19979b%3A0xe90d60e621f86cb5!2zNTUxLzUgxJDGsOG7nW5nIFBo4bqhbSBWxINuIENow60sIFBoxrDhu51uZyA3LCBRdeG6rW4gNiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1657308919303!5m2!1svi!2s"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <form action="">
            <h3>liên lạc</h3>
            <div className="inputBox">
              <span>
                <UserOutlined />
              </span>
              <input type="text" placeholder="Họ và Tên" />
            </div>
            <div className="inputBox">
              <span>
                <MailOutlined />
              </span>
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <span>
                <PhoneOutlined />
              </span>
              <input type="number" placeholder="Số điện thoại" />
            </div>
            <input type="submit" value="liên hệ" className="btn" />
          </form>
        </div>
      </section>
      {/* end contact
          blogs */}
      <section className="blogs" id="blogs">
        <h1 className="heading">
          Bài <span>viết</span>
        </h1>
        <div className="box-container">
          <Blogs
            img="./img/blog-1.jpeg"
            hd="Mỗi buổi sáng, nếu không có tách cà phê, tôi cảm thấy mình vô
            vị!"
            ad="by admin / 21st may, 2021"
            ctn="Cà phê không phải là thú thanh thản như trà, càng không mạnh mẽ bạo liệt như rượu."
            btn="đọc thêm"
          />
          <Blogs
            img="./img/blog-2.jpeg"
            hd="Cà phê khiến ta mạnh mẽ, điềm đạm và thông thái"
            ad="by admin / 21st may, 2021"
            ctn="Người thưởng thức nhẹ nhàng cho rằng cà phê là gạch nối giữa
            niềm vui và nỗi buồn."
            btn="đọc thêm"
          />
          <Blogs
            img="./img/blog-3.jpeg"
            hd="Tôi yêu ly cà phê buổi sáng, con đường ngập lá vàng"
            ad="by admin / 21st may, 2021"
            ctn="Một tách cà phê vào buổi sáng mang lại sự tuyệt vời mà không
            buổi nào có thể tạo ra được."
            btn="đọc thêm"
          />
        </div>
      </section>
      {/* end blogs
          footer */}
      <section className="footer">
        <div className="share">
          <Link to="/">
            <FacebookOutlined />
          </Link>
          <Link to="/">
            <TwitterOutlined />
          </Link>
          <Link to="/">
            <InstagramOutlined />
          </Link>
          <Link to="/">
            <LinkedinOutlined />
          </Link>
          <Link to="/">
            <YoutubeOutlined />
          </Link>
        </div>
        <div className="links">
          <a href="#home">Trang chủ</a>
          <a href="#about">Giới thiệu</a>
          <a href="#menu">Thực đơn</a>
          <a href="#product">Sản phẩm</a>
          <a href="#review">Đánh giá</a>
          <a href="#contact">Liên hệ</a>
          <a href="#blogs">Bài viết</a>
        </div>
      </section>
    </div>
  );
}
