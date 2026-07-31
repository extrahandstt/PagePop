import "./App.css";
import { Helmet } from "react-helmet-async";

import logoImg from "./assets/logo.png";

import b01Hero from "./assets/b01-hero.jpeg";
import b02Hero from "./assets/b02-hero.png";
import b03Hero from "./assets/b03-hero.png";
import b04Hero from "./assets/b04-hero.png";


function App() {
  return (
        <main className="pagepop">
          <Helmet>
  <title>
    PagePop | One Link for Your Business in Trinidad & Tobago
  </title>

  <meta
    name="description"
    content="Give your business one simple link for customers to discover your services, see your work, find you and get in touch. PagePop for businesses in Trinidad & Tobago."
  />

  <meta
    name="keywords"
    content="PagePop, Trinidad business, Trinidad and Tobago businesses, business link, one link business page, business profile Trinidad, local business Trinidad"
  />

  <meta name="robots" content="index, follow" />

  <meta
    property="og:title"
    content="PagePop | One Link for Your Business"
  />

  <meta
    property="og:description"
    content="One simple link for your business. Show customers what you do, what you offer and how to reach you."
  />

  <meta property="og:type" content="website" />

  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PagePop",
    description:
      "One simple link for businesses in Trinidad & Tobago to share their services, work, location and contact information.",
    inLanguage: "en-TT"
  })}
</script>
</Helmet>

      {/* NAV */}
      <nav className="nav">
        <a href="#top" className="brand">
  <img
    src={logoImg}
    alt="PagePop"
    className="brand-logo"
  />
</a>

        <div className="nav-links">
          <a href="#why">WHY PAGEPOP</a>
          <a href="#examples">EXAMPLES</a>
          <a href="#business">FOR BUSINESS</a>
        </div>

        <a href="#start" className="nav-button">
          GET YOURS
        </a>
      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-meta">
          <span>TRINIDAD & TOBAGO</span>
          <span>ONE LINK PAGES</span>
        </div>

        <div className="hero-content">

          <span className="eyebrow">
  FOR BUSINESSES · TRINIDAD & TOBAGO
</span>

          <h1>
  One link.
  <br />
  <em>Your business.</em>
</h1>

          <p className="hero-description">
  Give customers one simple place to discover what you do,
  see what you offer, find you and get in touch.
</p>
          <a href="#examples" className="hero-button">
            SEE WHAT WE BUILD
            <span>↗</span>
          </a>

        </div>

        <div className="hero-footer">
          <span>PAGEPOP</span>
          <span>BUILT FOR LOCAL BUSINESS</span>
        </div>

      </section>


      {/* WHY PAGEPOP */}
      <section className="why" id="why">

        <div className="section-label">
          <span>01</span>
          <span>THE PROBLEM</span>
        </div>

        <div className="why-content">

          <h2>
            Your business is
            <br />
            <em>already online.</em>
          </h2>

          <div className="why-copy">

            <p>
              But your customers shouldn't have to search through
              Instagram, Facebook, WhatsApp and Google just to figure
              out what you do.
            </p>

            <p>
              PagePop brings the important stuff together in one place —
              designed around your business.
            </p>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="features">

        <div className="section-label">
          <span>02</span>
          <span>ONE LINK · MORE INFORMATION</span>
        </div>

        <div className="feature-heading">
          <h2>
            Everything your
            <br />
            customer needs.
          </h2>

          <p>
            Your PagePop can give customers a clearer picture of your
            business before they ever send a message.
          </p>
        </div>


        <div className="feature-grid">

          <article>
            <span>01</span>
            <h3>Services</h3>
            <p>Show customers exactly what you offer.</p>
          </article>

          <article>
            <span>02</span>
            <h3>Your Work</h3>
            <p>Put your best work where people can see it.</p>
          </article>

          <article>
            <span>03</span>
            <h3>About</h3>
            <p>Tell people who you are and what makes you different.</p>
          </article>

          <article>
            <span>04</span>
            <h3>Location</h3>
            <p>Make it easy for customers to find you.</p>
          </article>

          <article>
            <span>05</span>
            <h3>Contact</h3>
            <p>Give customers a direct way to reach you.</p>
          </article>

          <article>
            <span>06</span>
            <h3>Booking</h3>
            <p>Give customers an obvious next step.</p>
          </article>

        </div>

      </section>


      {/* EXAMPLES */}
      <section className="examples" id="examples">

        <div className="section-label">
          <span>03</span>
          <span>SEE WHAT WE BUILD</span>
        </div>

        <div className="examples-heading">

          <h2>
            Different businesses.
            <br />
            <em>One simple idea.</em>
          </h2>

          <p>
            Every PagePop is designed around the business it represents.
          </p>

        </div>


        <div className="example-grid">

          <a href="#" className="example-card">
            <div className="example-placeholder beauty">
  <img src={b01Hero} alt="PagePop beauty business example" />
  <span>B01</span>
</div>

            <div className="example-info">
              <span>01</span>
              <strong>Beauty</strong>
              <span>VIEW ↗</span>
            </div>
          </a>


          <a href="#" className="example-card">
            <div className="example-placeholder tutor">
  <img
    src={b02Hero}
    alt="Tutoring business PagePop example"
  />
  <span>B02</span>
</div>

            <div className="example-info">
              <span>02</span>
              <strong>Tutoring</strong>
              <span>VIEW ↗</span>
            </div>
          </a>


          <a href="#" className="example-card">
            <div className="example-placeholder cleaning">
  <img
    src={b03Hero}
    alt="Cleaning business PagePop example"
  />
  <span>B03</span>
</div>

            <div className="example-info">
              <span>03</span>
              <strong>Cleaning</strong>
              <span>VIEW ↗</span>
            </div>
          </a>


          <a href="#" className="example-card">
            <div className="example-placeholder barber">
  <img
    src={b04Hero}
    alt="Barber business PagePop example"
  />
  <span>B04</span>
</div>

            <div className="example-info">
              <span>04</span>
              <strong>Barber</strong>
              <span>VIEW ↗</span>
            </div>
          </a>

        </div>

      </section>


      {/* BUSINESS */}
      <section className="business" id="business">

        <div className="section-label">
          <span>04</span>
          <span>BUILT FOR BUSINESS</span>
        </div>

        <div className="business-content">

          <h2>
            Whatever you do,
            <br />
            <em>make it easy to find.</em>
          </h2>

<p className="seo-intro">
  PagePop is a simple business link for entrepreneurs and
  small businesses in Trinidad & Tobago.
</p>

          <div className="business-list">
  <span>Barbers</span>
  <span>Cleaners</span>
  <span>Beauty Businesses</span>
  <span>Tutors</span>
  <span>Mechanics</span>
  <span>Photographers</span>
  <span>Caterers</span>
  <span>Contractors</span>
  <span>Small Businesses</span>
</div>

<p className="business-description">
  PagePop gives Trinidad & Tobago businesses one simple place
  to share their services, work, location and contact details
  with customers.
</p>
        </div>

      </section>


      {/* CTA */}
      <section className="cta" id="start">

        <span className="eyebrow">
          READY TO BE EASIER TO FIND?
        </span>

        <h2>
          Give your business
          <br />
          <em>one good link.</em>
        </h2>

        <a href="#" className="cta-button">
          GET YOUR PAGEPOP
          <span>↗</span>
        </a>

      </section>


      {/* FOOTER */}
      <footer>

        <strong>PAGEPOP®</strong>

        <span>ONE LINK · YOUR BUSINESS</span>

        <span>TRINIDAD & TOBAGO 🇹🇹</span>

      </footer>

    </main>
  );
}

export default App;