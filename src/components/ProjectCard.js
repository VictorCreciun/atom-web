import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <button>See More</button>
        </div>
      </div>
    </Col>
  );
};
