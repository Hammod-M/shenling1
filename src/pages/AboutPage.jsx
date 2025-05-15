
import React from "react";
import { Helmet } from "react-helmet-async";
import AboutHero from "@/components/about/AboutHero";
import CompanyHistory from "@/components/about/CompanyHistory";
import MissionValues from "@/components/about/MissionValues";
import TeamSection from "@/components/about/TeamSection";
import AchievementsSection from "@/components/about/AchievementsSection";
import FactoryFocusSection from "@/components/about/FactoryFocusSection"; 

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>О компании | Shenling Russia - Представительство Завода</title>
        <meta name="description" content="Узнайте больше о Shenling Russia - официальном представительстве китайского завода Shenling, пионере в области промышленного оборудования." />
      </Helmet>
      
      <AboutHero />
      <FactoryFocusSection />
      <CompanyHistory />
      <MissionValues />
      <TeamSection />
      <AchievementsSection />
    </>
  );
};

export default AboutPage;
