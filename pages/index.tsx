import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#22f3ee]">
      <Head>
        <title>Cameron Porter</title>
      </Head>

      <Header />

      <Hero />

      <About />

      <WorkExperience />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
