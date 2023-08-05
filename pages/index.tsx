import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const index = () => {
  return (
    <div>
      <h5>
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and i have a Youtube Channel where i teach Full Stack
        Web Development Projects
      </h5>
      <div>
        <h6>What I Offer</h6>
        <div>
          {services.map((service) => (
            <ServiceCard key="1" service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
