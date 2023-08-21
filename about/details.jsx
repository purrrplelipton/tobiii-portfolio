import { TobyAvif, TobyWebp } from '@assets/images';
import React, { useState } from 'react';
import './details.css';

const techs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Sass',
  'LESS',
  'Redux',
  'MobX',
  'Webpack',
  'Babel',
  'RESTful APIs',
  'Git',
];

function Details() {
  const [imgOpen, setImgOpen] = useState(false);

  return (
    <>
      <section className="details">
        <div className="about-me">
          <h1 className="section-title">About Me</h1>
          <div className="intro">
            <p>
              I&apos;m Emmanuel Adeyeye - known as{' '}
              <span className="informal-name">Tobi</span> by most - a passionate
              frontend software engineer from Lagos, Nigeria
            </p>
            <p>
              I&apos;ve dedicated my career to crafting delightful user
              experiences and building robust web applications. With a strong
              foundation in HTML, CSS, and JavaScript, I possess extensive
              knowledge of the currently most popular frontend framework, React.
              I am skilled in translating design mockups into pixel-perfect,
              responsive web interfaces, leveraging my expertise in CSS
              preprocessors like Sass and LESS
            </p>
            <p>
              My attention to detail and commitment to writing clean,
              maintainable code allows me to create intuitive UIs that
              seamlessly blend form and function
            </p>
          </div>
          <div className="technologies">
            <h2 className="subsection-title">
              Here are some of the technologies I have been actively engaged
              with lately:
            </h2>
            <ul className="technology-list">
              {techs.map((tech, i) => (
                <li key={`${tech}-${i}`}>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <picture>
          <source srcSet={TobyAvif} type="image/avif" />
          <source srcSet={TobyWebp} type="image/webp" />
          <img
            src={TobyAvif}
            alt="an headshot image of me"
            loading="lazy"
            className={imgOpen ? 'my-pic enlarged' : 'my-pic'}
            onClick={() => setImgOpen(true)}
          />
        </picture>
      </section>
      {imgOpen && (
        <div className="modal-overlay" onClick={() => setImgOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <picture>
              <source srcSet={TobyAvif} type="image/avif" />
              <source srcSet={TobyWebp} type="image/webp" />
              <img
                src={TobyAvif}
                alt="an headshot image of me"
                loading="lazy"
                className="modal-image"
                onClick={() => setImgOpen(true)}
              />
            </picture>
          </div>
        </div>
      )}
    </>
  );
}

export default Details;