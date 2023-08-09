import Bar from "../components/Bar";
import { motion } from "framer-motion";
import { languages, tools } from "../data";
import { fadeInUp, routeAnimation } from "../animation";

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* education and experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Karakul Academic Lyceum(2018-2020)</p>
            <p className="my-3">
              During 2018-2020 , I studied at Karakul Academic Lyceum. Here i
              learnt advanced Mathematics, English and critical thinking. Now I
              am studying at Ajou University in Tashkent ,third-year student,
              faculty - Electrical and Computer Engineering
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Intern Frontend Developer
            </h5>
            <p className="font-semibold">Perfect Result</p>
            <p className="my-3">
              I tried to improve my skills and i did my best to give my all for
              the benefit of the company
            </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Junior Frontend Developer
            </h5>
            <p className="font-semibold">Iq Academy</p>
            <p className="my-3">
              I learnt some new technologies, libraries and frameworks and
              improved my skills
            </p>
          </div>
        </motion.div>
      </div>
      {/* languages and tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((lang) => (
              <Bar data={lang} key={lang.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
