import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="container-contact">
      <div className="container-all container">
        <div className="info-contact">
          <div>
            <h2>Contatti</h2>
            <h5>Dove puoi contattarmi</h5>
          </div>
          <ul className="social contact-social">
            <li>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/matteo-pelusi-b157a81a1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
                <p>LinkedIn</p>
              </a>
            </li>
            <li>
              <a
                className="git"
                href="https://github.com/matteopelusi7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
                <p>GitHub</p>
              </a>
            </li>
            <li className="location">
              <FaMapMarkerAlt />
              <p>Pineto (TE), Abruzzo</p>
            </li>
          </ul>
        </div>
        <div className="where">
          <iframe
            title="Mappa di Pineto"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23491.93948219419!2d14.04601174515747!3d42.60851129081111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1331bd64a74c590b%3A0xc940ca57d1aa3406!2s64025%20Pineto%20TE!5e0!3m2!1sit!2sit!4v1728236948405!5m2!1sit!2sit"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
