import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio React App',
    github: 'https://github.com/CameronRiecan/cameronriecan.github.io',
    demo: 'https://cameronriecan.github.io/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Language Support React App',
    github: 'https://github.com/CameronRiecan/language_support',
    demo: 'https://cameronriecan.github.io/language_support/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Calculator React App',
    github: 'https://github.com/CameronRiecan/SimpleCalculatorReactApp',
    demo: 'https://cameronriecan.github.io/SimpleCalculatorReactApp/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Reserve a Table React App',
    github: 'https://github.com/CameronRiecan/ll_restaurant_webapp',
    demo: 'https://cameronriecan.github.io/ll_restaurant_webapp/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Currency Field React App',
    github: 'https://github.com/CameronRiecan/currency-field-app',
    demo: 'https://cameronriecan.github.io/currency-field-app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'To Do List App',
    github: 'https://github.com/CameronRiecan/To-Do-List',
    demo: 'https://cameronriecan.github.io/To-Do-List/'
  },
  {
    id: 7,
    image: IMG6,
    title: 'Project Coming Soon...',
    github: '', //Empty URL
    demo: '' //Empty URL
  }
].map((item) => ({
  ...item,
  isDisabled: !item.github || !item.demo,
}));

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo, isDisabled }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  {isDisabled ? (
                    <span className="btn disabled">Github</span>
                  ) : (
                    <a
                      href={github}
                      className="btn"
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Github
                    </a>
                  )}
                  {isDisabled ? (
                    <span className="btn btn-primary disabled">Live Demo</span>
                  ) : (
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  )
}

export default Portfolio