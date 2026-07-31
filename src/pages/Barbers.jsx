
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import barberHero from "../assets/b04-hero.png";

export default function Barbers() {
  return (
    <>
      <Helmet>
        <title>
          PagePop for Barbers | One Link for Your Barber Business
        </title>

        <meta
          name="description"
          content="Give your barber business one professional link for services, prices, photos, location and WhatsApp. PagePop makes it easier for clients to find your information and book."
        />

        <link
          rel="canonical"
          href="https://extrahandstt.github.io/PagePop/for/barbers"
        />
      </Helmet>

      <main className="barber-page">

        {/* HERO */}
        <section className="barber-hero">

          <div className="barber-hero-copy">

            <Link to="/" className="barber-back">
              ← PagePop
            </Link>

            <p className="barber-eyebrow">
              PAGEPOP FOR BARBERS
            </p>

            <h1>
              Your cuts.
              <br />
              <em>Your business.</em>
              <br />
              One link.
            </h1>

            <p className="barber-hero-text">
              Stop typing the same information over and over.
              Give your clients one professional page where
              they can see what you offer, check your work,
              find you and get in touch.
            </p>

            <div className="barber-actions">
              <a href="#why-pagepop" className="barber-primary">
                See Why Barbers Use PagePop
              </a>

              <a href="#features" className="barber-secondary">
                What's included <span>↓</span>
              </a>
            </div>

            <div className="barber-trust">
              <span>✓ Services</span>
              <span>✓ Your work</span>
              <span>✓ Location</span>
              <span>✓ WhatsApp</span>
            </div>

          </div>

          <div className="barber-visual">

            <div className="barber-glow"></div>

            <div className="barber-card">

              <div className="barber-card-top">
                <span>PAGEPOP</span>
                <span>YOUR BUSINESS · ONE LINK</span>
              </div>

              <img
                src={barberHero}
                alt="PagePop barber business page"
              />

              <div className="barber-card-bottom">
                <div>
                  <strong>Everything clients need.</strong>
                  <span>in one place.</span>
                </div>

                <span className="arrow-circle">↗</span>
              </div>

            </div>

          </div>

        </section>


        {/* PROBLEM */}
        <section id="why-pagepop" className="barber-problem">

          <div className="barber-section-label">
            <span>01</span>
            WHY PAGEPOP
          </div>

          <div className="barber-problem-grid">

            <div>
              <h2>
                Stop answering
                <br />
                <em>the same questions.</em>
              </h2>
            </div>

            <div className="barber-problem-copy">

              <p>
                A potential client sees your post and wants
                to know more.
              </p>

              <div className="question-list">
                <div>
                  <span>“</span>
                  <strong>How much is a fade?</strong>
                </div>

                <div>
                  <span>“</span>
                  <strong>Where are you located?</strong>
                </div>

                <div>
                  <span>“</span>
                  <strong>What services do you offer?</strong>
                </div>

                <div>
                  <span>“</span>
                  <strong>How do I book?</strong>
                </div>
              </div>

              <p className="solution-text">
                Instead of typing the answers again and again,
                send them your PagePop.
              </p>

            </div>

          </div>

        </section>


        {/* FEATURES */}
        <section id="features" className="barber-features">

          <div className="barber-section-heading">

            <div>
              <div className="barber-section-label">
                <span>02</span>
                EVERYTHING IN ONE PLACE
              </div>

              <h2>
                More than
                <br />
                <em>a bio link.</em>
              </h2>
            </div>

            <p>
              Your PagePop gives clients the information they
              actually need before they decide to book.
            </p>

          </div>


          <div className="barber-feature-grid">

            <article className="barber-feature featured-feature">

              <div className="feature-number">01</div>

              <div>
                <h3>Services & Prices</h3>

                <p>
                  Show your cuts, grooming services, packages
                  and prices without sending a long message.
                </p>
              </div>

              <span className="feature-icon">✂</span>

            </article>


            <article className="barber-feature">

              <div className="feature-number">02</div>

              <div>
                <h3>Show Your Work</h3>

                <p>
                  Let your best cuts and transformations
                  speak for themselves.
                </p>
              </div>

              <span className="feature-icon">◉</span>

            </article>


            <article className="barber-feature">

              <div className="feature-number">03</div>

              <div>
                <h3>Make Booking Easier</h3>

                <p>
                  Give clients a clear path from discovering
                  your business to contacting you.
                </p>
              </div>

              <span className="feature-icon">↗</span>

            </article>


            <article className="barber-feature">

              <div className="feature-number">04</div>

              <div>
                <h3>Share One Link</h3>

                <p>
                  Put your PagePop anywhere — Instagram,
                  Facebook, TikTok, WhatsApp and more.
                </p>
              </div>

              <span className="feature-icon">∞</span>

            </article>

          </div>

        </section>


        {/* VISUAL STATEMENT */}
        <section className="barber-statement">

          <div className="statement-image">

            <img
              src={barberHero}
              alt="Barber business"
            />

            <div className="statement-overlay">
              <span>YOUR BUSINESS</span>
              <strong>DESERVES<br />TO BE FOUND.</strong>
            </div>

          </div>

          <div className="statement-copy">

            <p className="barber-section-label">
              <span>03</span>
              BUILT FOR THE WAY YOU WORK
            </p>

            <h2>
              Post it.
              <br />
              <em>Share it.</em>
              <br />
              Get back to work.
            </h2>

            <p>
              You already have enough to do. PagePop gives
              you one simple link to put in your social profiles,
              captions and messages so clients can find the
              information they need without you having to
              explain everything from scratch.
            </p>

            <a href="#get-started" className="barber-primary">
              I Want My PagePop
            </a>

          </div>

        </section>


        {/* CTA */}
        <section id="get-started" className="barber-final">

          <div className="barber-final-inner">

            <p className="barber-eyebrow">
              YOUR BUSINESS · YOUR LINK
            </p>

            <h2>
              One link.
              <br />
              <em>More possibilities.</em>
            </h2>

            <p>
              Put your services, work, location and contact
              information where your clients can find it.
            </p>

            <Link to="/" className="barber-final-button">
              Explore PagePop <span>↗</span>
            </Link>

          </div>

        </section>


        {/* FOOTER */}
        <footer className="barber-footer">

          <Link to="/" className="barber-footer-logo">
            PagePop
          </Link>

          <span>
            One link. More business.
          </span>

          <Link to="/">
            Back to PagePop ↗
          </Link>

        </footer>

      </main>
    </>
  );
}

