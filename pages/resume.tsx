import Bar from "../components/Bar";
import { languages, tools } from "../data";
import {motion} from 'framer-motion';
import { fadeInUp, routeAnimation } from "../animations";

const Resume = () => {
  return (
    <motion.div className="px-6 py-2" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
             SoyHenry.com Bootcamp 
            </h5>
            <p className="font-semibold">Full Stack Web Developer | +700 hours, front + back end</p>
            <p className="my-3">
            five month intensive bootcamp, theoretical and practical
            2 MERN projects done and different practices each day
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">La Montañés Ecommerce</h5>
            <p className="font-semibold">Stack Mern | jul - agosto 2021</p>
            <p className="my-2 text-sm">App developed collaboratively with daily and weekly sprints to a Product Owner.Features: product catalog, user login, shopping cart, order checkout, payment gateway, wishlist, user dashboard and admin dashboard, category creation and special discounts.
React & Redux | Express | MongoDB | Mongoose | Material-UI</p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages, Frameworks </h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold"> & Tech Skills </h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
