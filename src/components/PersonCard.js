import { Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram, FaAt } from "react-icons/fa"; // Importă iconițele
import { FaHouse } from "react-icons/fa6";

export const PersonCard = ({
  title,
  description,
  imgUrl,
  linkedin,
  github,
  instagram,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <div className="social-icons">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </Col>
  );
};

export const SponsorCompanyCard = ({ title, description, imgUrl, website }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <div className="social-icons">
          <a href={website} target="_blank" rel="noopener noreferrer">
            <FaHouse />
          </a>
        </div>
      </div>
    </Col>
  );
};

export const SponsorPersonCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export const MentorCard = ({
  title,
  description,
  imgUrl,
  linkedin,
  instagram,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <div className="social-icons">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </Col>
  );
};
