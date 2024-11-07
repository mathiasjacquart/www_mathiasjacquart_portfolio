import React from 'react'
import photoBio from "../../assets/images/photo-bio.jpg"

export default function Portrait() {
  return (
    <section id="portrait"className='portrait-container'>

      <div className='font-textPrimary container mx-auto portrait'>
          <div className="flex flex-wrap flex-row justify-between items-center ">
            <div className="w-full  lg:w-1/2 lg:order-1 order-2 ">
            <h3 className='text-primary py-6 '>Mon Portrait</h3>
              <p className='py-3 text-primary .portrait-text'>
              Le sourire d'enfer à droite, c'est moi, Mathias, 25 ans et apprenti développeur !
              </p>
              <p className='py-3 text-primary  .portrait-text'>
              J'aime apprendre, écouter, partager et surtout CODER.
              </p>
              <p className='py-3 text-primary  .portrait-text'>
              Fraîchement diplômé du TP de développeur Web et en formation autodidacte depuis un an, je souhaite renforcer ces nouvelles compétences. D’un naturel curieux, logique et pragmatique j’aimerais intégrer un poste de développeur Web full stack afin de monter en compétence technique.
              </p>

              <p className='py-3 text-primary  .portrait-text'>
              Passionné de technologies et de développement web,  je suis ouvert à tous types de secteurs et pourrait faire profiter de mon expérience du milieu industriel et de mes qualités d'organisation dans la conduite de projets.
              </p>
            </div>
            <div className="w-full photo-portrait  lg:w-1/3">
              <img src={photoBio} className="photo-img" alt="photo portrait mathias" />
            </div>

          </div>


      </div>
      {/* <svg className="separator separator--down" width="100%" height="100%" viewBox="0 0 100 10" preserveAspectRatio="none"> 
        <path className="path-anim separator__path" data-path-to="M 0 0 C 29 6 78 17 100 0 L 100 10 H 0 Z" vectorEffect="non-scaling-stroke" d="M 0 0 C 23.7851 3.6296 69.9406 13.2074 100 0 L 100 10 H 0 Z"></path> 
      </svg> */}
    </section>
  )
}
