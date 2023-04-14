import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "@/components/layout";
import { BsLink45Deg } from "react-icons/bs";
import PortfolioCard from "@/components/portfolioCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <p className="mt-7">Hello, I'm</p>
      <h1 className="font-bold text-transparent text-8xl bg-gradient-to-r bg-clip-text from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        Justin Frazier
      </h1>
      <p>
        I am a highly skilled software developer, with a deep committment to
        using technology to solve complex problems. With over 10 years of
        experience in the IT industry, I have had the privilege of managing
        teams and develop various software applications. Over the years, I have
        gained valuable experience in IT, software development and team
        leadership.
      </p>

      <p className="mt-5">
        I take great pride in my ability to write clean, efficient, and
        maintainable code that meets both the functional and business
        requirements of each project. I understand the importance of writing
        code that is not only functional but also scalable, secure, and
        maintainable in the long run. By adopting the best coding practices and
        leveraging modern technologies and frameworks, I ensure that my code is
        always of the highest quality. My strong communication skills allow me
        to collaborate effectively with cross-functional teams and stakeholders,
        ensuring that projects are delivered on time and to the highest quality.{" "}
      </p>

      <p className="mt-5">
        I am a firm believer in the power of collaboration and teamwork and
        always strive to foster an environment that encourages open
        communication, mutual respect, and a shared sense of purpose. In terms
        of my technical expertise, I am proficient in TypeScript, JavaScript,
        React, NextJS, NodeJS, Material UI, Tailwind CSS, and GoLang. However, I
        am always eager to learn and stay up-to-date with the latest trends and
        developments in the technology industry. I am constantly seeking new
        challenges and opportunities to grow my skills and knowledge and to make
        a meaningful contribution to the field.
      </p>
      <div className="mt-28">
        <h1 className="text-2xl font-semibold">Experience</h1>
        <div></div>
      </div>
      <PortfolioCard
        title="Constellix Registration"
        description="Registration page for the Constellix suite"
        link="https://manage.constellix.com/regui/#/"
        imageLink="/const-reg.png"
        imageAlt="Constellix Registration Page"
      />
    </Layout>
  );
}
