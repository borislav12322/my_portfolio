import s from './Portfolio.module.scss';

import PortfolioCard from './portfolioCard/PortfolioCard';


// Images
import SmoothieImg from '../../assets/imgs/portfolio/smoothie';

// React_spring
import { Spring, animated } from 'react-spring';

import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

const startState = { autoAlpha: 0, y: -50 };

function Portfolio(props) {

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
          <div className={s.grid_container}>

            <PortfolioCard
              projectName='Smoothie Project'
              projectDescription='It is a site about tasty and healthfull drinks'
              projectImage={SmoothieImg} />
            <PortfolioCard
              projectName='React Shop'
              projectDescription='It is a site about tasty and healthfull drinks'
              projectImage={SmoothieImg} />
            <PortfolioCard
              projectName='Bootstrap Project'
              projectDescription='It is a site about tasty and healthfull drinks'
              projectImage={SmoothieImg} />
            <PortfolioCard
              projectName='Helicopter Photo Project'
              projectDescription='It is a site about tasty and healthfull drinks'
              projectImage={SmoothieImg} />
            <PortfolioCard
              projectName='Arch Project'
              projectDescription='It is a site about tasty and healthfull drinks'
              projectImage={SmoothieImg} />
            <PortfolioCard
              projectName='Thrivetalk'
              projectDescription='It is a site about tasty and healthfull drinks'
              projectImage={SmoothieImg} />
          </div>
        </div>
      </section>
    </Transition>
  );
}

export default Portfolio;
