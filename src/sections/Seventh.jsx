import './Seventh.css'
import {
  FaWhatsapp,
  FaInstagram,
  FaGlobe,
} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

function Seventh() {
  return (
    <section className="seventh">
      <div className="seventh-glow seventh-glow-one" />
      <div className="seventh-glow seventh-glow-two" />
      <div className="seventh-grid" />

      <div className="seventh-top">
        <span>THE NEXT MOVE</span>
        <span>07 / 07</span>
      </div>

      <div className="seventh-content">
        <div className="seventh-main">
          <span className="seventh-kicker">
            LET'S CREATE SOMETHING
          </span>

          <h1>
            LET'S BUILD
            <span>SOMETHING</span>
            <strong>THAT MATTERS.</strong>
          </h1>

          <p>
            Have an idea, a brand or a digital experience
            in mind? Let's turn it into something worth
            remembering.
          </p>
        </div>

        <div className="seventh-actions">

          {/* START A PROJECT */}

          <a
            href="mailto:studiovertex.work@gmail.com?subject=Start%20a%20Project"
            className="seventh-action primary"
          >
            <span>START A PROJECT</span>
          </a>

          <span className="seventh-action-arrow">
            ↓
          </span>

          {/* GET IN TOUCH */}

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=studiovertex.work@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="seventh-action"
          >
            <span>GET IN TOUCH</span>
          </a>

          <span className="seventh-action-arrow">
            ↓
          </span>

          {/* SOCIAL / CONTACT ICONS */}

          <div className="seventh-socials">

            <a
              href="https://wa.me/916376637702"
              target="_blank"
              rel="noopener noreferrer"
              className="seventh-social seventh-whatsapp"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/_vertex.studio___/"
              target="_blank"
              rel="noopener noreferrer"
              className="seventh-social seventh-instagram"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=studiovertex.work@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="seventh-social seventh-gmail"
              aria-label="Gmail"
              title="Gmail"
            >
              <SiGmail />
            </a>

            <a
              href="https://vertex-studio-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="seventh-social seventh-website"
              aria-label="Vertex Studio Website"
              title="Website"
            >
              <FaGlobe />
            </a>

          </div>
        </div>
      </div>

      <div className="seventh-center-line" />

      <div className="seventh-bottom">
        <span>DESIGN</span>
        <i />
        <span>DEVELOPMENT</span>
        <i />
        <span>EXPERIENCE</span>

        <div className="seventh-bottom-spacer" />

        <span>VERTEX STUDIO</span>
      </div>
    </section>
  )
}

export default Seventh