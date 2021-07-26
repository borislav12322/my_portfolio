import s from './Portfolio.module.scss';
import { useRef, useEffect, useState } from 'react';

import PortfolioCard from './portfolioCard/PortfolioCard';


// Images
import archImg from '../../assets/imgs/portfolio/arch_img.jpeg';
import LogisticImg from '../../assets/imgs/portfolio/logistic.jpeg';
import thriveImg from '../../assets/imgs/portfolio/thrive_img.jpeg';
import helicopter from '../../assets/imgs/portfolio/helicopter_img.jpeg';
import bootstrap from '../../assets/imgs/portfolio/bootstrap_img.jpeg';
import shopImg from '../../assets/imgs/portfolio/shop_img.png'

// React_spring
import { Spring, animated } from 'react-spring';

import { Transition } from "react-transition-group";
import { TweenMax, TimelineLite, Power3 } from "gsap/all";

const startState = { autoAlpha: 0, y: -50 };

const boxes = [
  {
    title: 'Transport',
    link: 'https://borislav12322.github.io/transport_logistic/',
    img: LogisticImg,
    description: ''
  },
  {
    title: 'Shop',
    link: '#',
    img: shopImg,
  },
  {
    title: 'Bootstrap',
    link: 'https://bootstrapincrease.netlify.app/',
    img: bootstrap,
  },
  {
    title: 'Helicopter Photo',
    img: helicopter,
  },
  {
    title: 'ArchMove',
    link: 'https://archmovesite.netlify.app',
    img: archImg,
  },
  {
    title: 'Thrive Talk',
    img: thriveImg,
  },
]

function Portfolio(props) {
  let tl = new TimelineLite();

  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {  
    

  }, [])

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el)
    }
    console.log(revealRefs.current);
  }

  return (

    <Transition
      unmountOnExit
      in={props.show}
      timeout={1000}
      onEnter={node => TweenMax.set(node, startState)}
      addEndListener={(node, done) => {
        TweenMax.to(node, 0.5, {
          autoAlpha: props.show ? 1 : 0,
          y: props.show ? 0 : 50,
          onComplete: done
        });

        revealRefs.current.forEach((el)=>{
          tl.from(el,0.5,{
            autoAlpha: 0,
            delay: 0.1,
            stagger: 0.2,
            y: 50,
            ease: Power3.easeOut,
            onComplete: done,
          })
        })

      }}
    >
      <section className={s.portfolio}>
        <div className={s.container}>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1, color: '#FFFFFF' }}
            config={{ duration: 2000 }}>
            {styles => (
              <animated.h2 style={styles} className={s.title}>
                Portfolios
              </animated.h2>)}

          </Spring>

          <div className={s.grid_container} >
            {
              boxes.map(({ title, link, img }) => {
                return (
                  <div key={title} className={s.cardBox}  ref={addToRefs}>
                    <PortfolioCard
                      projectName={title}
                      projectDescription='It is a site about tasty and healthfull drinks'
                      projectImage={img}
                      linkPath={link} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </Transition>
  );
}

export default Portfolio;


