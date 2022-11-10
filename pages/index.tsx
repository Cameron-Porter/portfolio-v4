import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Cameron Porter</title>
      </Head>

      <Header />

      <Hero />

      <About />

      <WorkExperience />

      <Skills />

      <Projects />

      {/* Contact */}

      {/* Footer */}
    </div>
  );
};

export default Home;
