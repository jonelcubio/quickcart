import fb from "../../assets/fb.svg";
import x from "../../assets/x.svg";
import ins from "../../assets/ig.svg";

export function PreFooter() {
  return(
    <main className="prefooter-main">
      <div className="prefooter-con">
        <div className="prefooter-brand">
          <div className="prefooter-brand-title">QUICKCART</div>
          <div className="prefooter-brand-subtitle">Browse through diverse range of <br></br>meticulously crafted items, designed<br></br>
          to bring out your individuality to your sense of style.</div>

          <div className="prefooter-brand-socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" className="prefooter-social-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={x} alt="Twitter" className="prefooter-social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={ins} alt="Instagram" className="prefooter-social-icon" />
            </a>
          </div>
        </div>

        <div className="prefooter-company">
          <div className="prefooter-company-title">COMPANY</div>
          <ul className="prefooter-company-list">
            <li className="prefooter-company-item">About Us</li>
            <li className="prefooter-company-item">Careers</li>
            <li className="prefooter-company-item">Press</li>
            <li className="prefooter-company-item">Blog</li>
          </ul>
        </div>

        <div className="prefooter-help">
          <div className="prefooter-help-title">HELP</div>
          <ul className="prefooter-help-list">
            <li className="prefooter-help-item">Customer Service</li>
            <li className="prefooter-help-item">Returns & Exchanges</li>
            <li className="prefooter-help-item">Shipping Information</li>
            <li className="prefooter-help-item">FAQs</li>
          </ul>
        </div>

        <div className="prefooter-faq">
          <div className="prefooter-faq-title">FAQ</div>
          <ul className="prefooter-faq-list">
            <li className="prefooter-faq-item">How to place an order?</li>
            <li className="prefooter-faq-item">Payment options</li>
            <li className="prefooter-faq-item">Order tracking</li>
            <li className="prefooter-faq-item">Contact support</li>
          </ul>
        </div>

        <div className="prefooter-resources">
          <div className="prefooter-resources-title">RESOURCES</div>
          <ul className="prefooter-resources-list">
            <li className="prefooter-resources-item">Size Guide</li>
            <li className="prefooter-resources-item">Gift Cards</li>
            <li className="prefooter-resources-item">Sustainability</li>
            <li className="prefooter-resources-item">Accessibility</li>
          </ul>
        </div>
      </div>

    </main>
  );
}