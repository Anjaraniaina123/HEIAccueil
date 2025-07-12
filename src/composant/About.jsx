import React from 'react'
import imageLeft from '../assets/A-propos-left-1.webp'
import { FaGraduationCap, FaUsers, FaMedal } from "react-icons/fa";

const propos = [
  {
    icon: FaGraduationCap,
    title: "+3 ans",
    text: "Depuis 3 ans, nous formons ceux qui décident le futur aux métiers de l'informatique. Nous sommes un groupe d'experts, de professionnels et des passionnés de l'informatique de Madagascar et de la grande famille HEI.",
  },
  {
    icon: FaUsers,
    title: "+250 étudiants",
    text: "Plus de 250 étudiants et plus d'une dizaine d'entreprises ont déjà fait confiance à notre habilitation par l'État malgache. Avec eux, nous sommes fiers de pouvoir parler de la grande famille HEI.",
  },
  {
    icon: FaMedal,
    title: "Notre mission",
    text: "Notre mission est d'amener des jeunes malgaches sur des domaines porteurs comme l'intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.",
  },
];

// eslint-disable-next-line no-unused-vars
const InfoCard = ({ icon: Icon, title, text }) => (
  <div className="p-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
    <h3 className="text-[#001948] font-semibold text-xl md:text-2xl mb-2 flex items-center justify-center md:justify-start">
      <Icon className="mr-4 text-6xl text-[#DFA408]" />
      <span>{title}</span>
    </h3>
    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
      {text}
    </p>
  </div>
);

export const About = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center md:items-start gap-12">

        <div className="md:w-1/2 w-full hidden md:flex justify-center">
          <img
            src={imageLeft}
            alt="Étudiants HEI"
            className="w-full max-w-md rounded-lg object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-[#001948] font-bold text-3xl sm:text-4xl md:text-5xl mb-8">
            À propos de nous
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1">
            {propos.map((item, index) => (
              <InfoCard
                key={index}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
