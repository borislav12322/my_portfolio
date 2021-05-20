import React, { useRef, useEffect, useState } from 'react';
import s from './Portfolio.module.scss';

import PortfolioCard from './portfolioCard/PortfolioCard';


// Images
import SmoothieImg from '../../assets/imgs/portfolio/smoothie';

// React_spring
import { Spring, animated } from 'react-spring';








function Portfolio(props) {



  return (  
      <section className={s.portfolio}>
        <div className={s.container}>
          <Spring
          from={{opacity: 0}}
          to={{opacity: 1, color: 'red'}}
          config={{duration: 1000}}>
          {styles =>(
            <animated.h2 style={styles} >
              Portfolios
            </animated.h2> )}
            
          </Spring>
          <div className={s.grid_container}>

              <PortfolioCard
              projectName='Smoothie Project'
              projectDescription='It is a site about tasty and healthfull drinks'
              projectImage={SmoothieImg} />
              <PortfolioCard
              projectName='Smoothie Project'
              projectDescription='It is a site about tasty and healthfull drinks'
              projectImage={SmoothieImg} />
              <PortfolioCard
              projectName='Smoothie Project'
              projectDescription='It is a site about tasty and healthfull drinks'
              projectImage={SmoothieImg} />
              <PortfolioCard
              projectName='Smoothie Project'
              projectDescription='It is a site about tasty and healthfull drinks'
              projectImage={SmoothieImg} />
              <PortfolioCard
              projectName='Smoothie Project'
              projectDescription='It is a site about tasty and healthfull drinks'
              projectImage={SmoothieImg} />
              <PortfolioCard
              projectName='Smoothie Project'
              projectDescription='It is a site about tasty and healthfull drinks'
              projectImage={SmoothieImg} />
          </div>
        </div>
      </section>
      );
}

export default Portfolio;
