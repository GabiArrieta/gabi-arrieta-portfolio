import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animations';

const About: NextPage = () => {
  // console.log(services);

  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      <h6 className="my-3 text-base font-medium">
        <span className="font-bold text-purple-800">Hi, I'm Gabriela, a passionate developer. </span>
        I love creating applications and learning new technologies. In 2021 I did a programming bootcamp <span className="font-bold">of more than 800 hours to specialize in web development</span>. Currently I am studying to become a <span className="font-bold">Systems Analyst</span> and incorporating new technology stacks.
      </h6>
      <h6>In my free time I like to do sports and take pictures outdoors (I love photography, especially 35mm film photography). In addition to my studies in programming, I have taken courses on art history at the university and I like to investigate and visit the latest exhibitions in my city.</h6>
      <br /> <h6><span className="italic font-bold">I'm hard working, super curious, committed and a fast learner!</span></h6>
      <div
        className="flex-grow p-4 mt-5 bg-purple-500 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-bold tracking-wide text-white">
          What I am doing
        </h4>

        <motion.div className="grid gap-6 my-3 md:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title} variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

//!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default About;
