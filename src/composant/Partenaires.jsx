import React from 'react';
import nexta from '../assets/nexta.webp';
import pnm from '../assets/PNM.png';
import yooz from '../assets/Yooz.webp';
import etech from '../assets/etech.png';
import emit from '../assets/emit.png';
import numer from '../assets/numer.png';
import bpartners from '../assets/bpartners.webp';
import yif from '../assets/YIF.webp';
import kantek from '../assets/kante-company.png';


function Partenaires() {
  return (
    <div>
      <section>
        <div className='text-center'>
            <h2 className='pt-10 pb-10 text-[34px] text-[#001948] font-bold'>Nos partenaires</h2>
            <p className='pb-22 text-[18px] text-[#001948]'>L’employabilité de nos étudiants se base sur la pertinence  de notre programme pédagogique et de la composition de notre corps <br /> 
            enseignant mais aussi du soutien et la collaboration des entreprises partenaires</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center pb-22 mr-52 ml-52">
                <img src={nexta} alt="Logo nexta" className="max-h-16 object-contain" />
                <img src={pnm} alt="Logo PNM" className="max-h-16 object-contain" />
                <img src={yooz} alt="yooz logo" className="max-h-16 object-contain" />
                <img src={etech} alt="etech logo" className="max-h-16 object-contain" />
                <img src={emit} alt="etech logo" className="max-h-16 object-contain" />
                <img src={numer} alt="etech logo" className="max-h-16 object-contain" />
                <img src={bpartners} alt="etech logo" className="max-h-16 object-contain" />
                <img src={yif} alt="etech logo" className="max-h-16 object-contain" />
                <img src={kantek} alt="etech logo" className="max-h-16 object-contain" />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Partenaires
