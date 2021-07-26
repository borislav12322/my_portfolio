import s from './Portfolio.module.scss';
import { useRef } from 'react';
import Particles from 'react-particles-js';

import PortfolioCard from './portfolioCard/PortfolioCard';

// Images
import archImg from '../../assets/imgs/portfolio/arch_img.webp';
import LogisticImg from '../../assets/imgs/portfolio/logistic.webp';
import thriveImg from '../../assets/imgs/portfolio/thrive_img.webp';
import helicopter from '../../assets/imgs/portfolio/helicopter_img.webp';
import bootstrap from '../../assets/imgs/portfolio/bootstrap_img.webp';
import shopImg from '../../assets/imgs/portfolio/shop_img.webp'

// React_spring
import { Spring, animated } from 'react-spring';

import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

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

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
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
      }}
    >
      <section className={s.portfolio}>
        <Particles canvasClassName	= {s.background}
          params={{
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 2,
                    "random": true
                },
                "move": {
                    "direction": "left",
                    "out_mode": "out"
                },
                "line_linked": {
                    "enable": false
                }
            },
            "interactivity": {
                "events": {
                    "onclick": {
                        "enable": true,
                        "mode": "remove"
                    }
                },
                "modes": {
                    "remove": {
                        "particles_nb": 10
                    }
                }
            }
        }} />
        <div className={s.container}>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1, color: '#FFFFFF' }}
            config={{ duration: 2000 }}>
            {styles => (
              <animated.h2 style={styles} className={s.title}>
                Portfolio
              </animated.h2>)}

          </Spring>

          <div className={s.grid_container} >
            {
              boxes.map(({ title, link, img }) => {
                return (
                  <div key={title} className={s.cardBox} ref={addToRefs}>
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


