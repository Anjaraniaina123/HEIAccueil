import React from 'react';
import java from '../assets/java.png';
import python from '../assets/python.png';
import js from '../assets/js.png';
import c from '../assets/C.png';
import ts from '../assets/TS.png';
import docker from '../assets/docker.png';
import next from '../assets/next.png';
import aws from '../assets/aws.png';
import serverless from '../assets/serverless.png';
import react from '../assets/react.png';
import openapi from '../assets/openapi.png';


function Technos() {
  return (
      <section className='bg-[#ededed] text-[#001948] py-20'>
        <div className='text-center'>
            <h2 className='pb-10 text-[34px] font-bold'>Les technos et langages utilisées </h2>
            <p className='text-[18px]'>Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent <br /> 
            une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les <br /> 
            développeurs à travers le monde.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center pr-52 pl-52 pt-26">
                <img src={java} alt="Logo java" className="max-h-16 " />
                <img src={python} alt="Logo python" className="max-h-16" />
                <img src={js} alt="js logo" className="max-h-16" />
                <img src={c} alt="C logo" className="max-h-16" />
                <img src={ts} alt="ts logo" className="max-h-16" />
                <img src={docker} alt="docker logo" className="max-h-16 object-contain w-32" />
                <img src={next} alt="next logo" className="max-h-16 object-contain" />
                <img src={aws} alt="aws logo" className="max-h-16 object-contain" />
                <img src={serverless} alt="serverless logo" className="max-h-16 object-contain" />
                <img src={react} alt="react logo" className="max-h-16 object-contain w-32" />
                <img src={openapi} alt="openapi logo" className="max-h-16 object-contain" />
            </div>

        </div>
      </section>
  )
}

export default Technos
