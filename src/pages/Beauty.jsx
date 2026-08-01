import "./Beauty.css";
import { Helmet } from "react-helmet-async";

import hero from "../assets/beauty/hero.png";
import gallery1 from "../assets/beauty/gallery1.png";
import gallery2 from "../assets/beauty/gallery2.png";
import gallery3 from "../assets/beauty/gallery3.png";
import gallery4 from "../assets/beauty/gallery4.png";
import bellaLogo from "../assets/beauty/bella-logo.png";

export default function Beauty() {
  return (
    <main className="beauty-page">

      <Helmet>
        <title>
          Bella Bloom Beauty Studio | Beauty Services
        </title>

        <meta
          name="description"
          content="A beautiful beauty business page example built from scratch by PagePop."
        />

        <link
          rel="canonical"
          href="https://hookengine.github.io/PagePop/for/beauty"
        />
      </Helmet>


      <section className="beauty-hero">

  <div className="beauty-hero-image">
    <img 
      src={hero}
      alt="Bella Bloom Beauty Studio"
    />
  </div>

  <div className="beauty-logo">
  <img
    src={bellaLogo}
    alt="Bella Bloom Beauty Studio logo"
  />
</div>

      <div className="launch-offer">

✨ Beauty Business Launch Special

<br/>

Custom page built from scratch

<br/>

<strong>$100TT until August 15</strong>

</div>

  <h1>
    Glow different.
    <br />
    <em>Feel confident.</em>
  </h1>

  <p>
    Luxury beauty treatments designed
    to help you look and feel your best.
  </p>

  <button>
    💗 Book Appointment
  </button>

</section>

      <section className="beauty-services">

        <h2>
          Our Services
        </h2>

        <div className="beauty-grid">

          <div>
            💗
            <h3>Lash Extensions</h3>
            <p>
              Natural and volume styles.
            </p>
          </div>

          <div>
            🌸
            <h3>Facials</h3>
            <p>
              Refresh and restore your glow.
            </p>
          </div>

          <div>
            💄
            <h3>Makeup</h3>
            <p>
              Glam looks for every occasion.
            </p>
          </div>

          <div>
            ✨
            <h3>Brows</h3>
            <p>
              Defined and beautiful.
            </p>
          </div>

        </div>

      </section>

      <section className="beauty-gallery">

<h2>
  Our Work ✨
</h2>

<div className="gallery-grid">

<img src={gallery1} alt="Beauty work"/>
<img src={gallery2} alt="Beauty work"/>
<img src={gallery3} alt="Beauty work"/>
<img src={gallery4} alt="Beauty work"/>

</div>

</section>


      <section className="beauty-about">

        <h2>
          About Bella Bloom
        </h2>

        <p>
          Creating beautiful experiences with
          personalized treatments, quality products
          and attention to every detail.
        </p>

      </section>


      <section className="beauty-book">

        <h2>
          Ready for your next beauty moment?
        </h2>

        <button>
          WhatsApp Us 💬
        </button>

      </section>

<span className="beauty-badge">
  ✨ BUILT FROM SCRATCH BY PAGEPOP
</span>
    </main>
  );
}