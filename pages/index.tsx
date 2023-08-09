import { fadeInUp, routeAnimation, stagger } from "../animation";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";

const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 text-base font-medium">
        Frontend web developer who is very determined and seeking for the job in
        order to gain experience and working on real projects. Diligent student
        in terms of learning new things and trying them. I am currently studying
        at Ajoun University in Tashkent(Third Year) in Computer Science
        Engineering from Academy of Technology. I have 1+ years of experience in
        Web Development and Frontend Developer and i like to craft solid and
        scalable frontend products with great user experiences.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 rounded dark:bg-dark-200 lg:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
