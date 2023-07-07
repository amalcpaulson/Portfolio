import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/projects/cdw.png";
import IMG2 from "../../assets/projects/mulearncce.png";
import IMG3 from "../../assets/projects/fundesign.png";

import IMG4 from "../../assets/projects/wrap.png";
import IMG5 from "../../assets/portfolio1.png";
import IMG6 from "../../assets/portfolio1.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "CODe Design Week Website",
    github: "https://github.com/Amal070146/code-design-week",
    demo: "https://codedesignweek.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Website for Mulearn CCE Chapter",
    github: "https://github.com/Amal070146/mulearn_cce",
    demo: "https://mulearn-cce.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Web applicaation for Fundesign",
    github: "https://github.com/Amal070146/fundesign",
    demo: "https://fundesign.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "WRAP - Waste Management Application",
    github: "https://github.com/Amal070146/Wrap-Django",
    demo: "https://wrap-web-app.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Lab Report Daily basis analysing application",
    github: "https://github.com/Amal070146/TEZER",
    demo: "https://cdn.dribbble.com/userupload/3864186/file/original-e76878961f17b4df6817b0d95a4a4d34.png?compress=1&resize=1200x900",
  },
  // {
  //   id: 6,
  //   image: IMG1,
  //   title: "Lab Report Daily basis analysing application",
  //   github: "https://github.com/Amal070146/TEZER",
  //   demo: "https://cdn.dribbble.com/userupload/3864186/file/original-e76878961f17b4df6817b0d95a4a4d34.png?compress=1&resize=1200x900",
  // },
];

const portfolio = () => {
  return (
    <div id="portfolio" className=".portfolio-wrapper">
      <div className="portfolio-header ">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <div>
        <button>View More</button>
      </div>
    </div>
  );
};

export default portfolio;
