import React from 'react'

import '../../css/dashboard.css'
function Dashboard() {
const services = [
  {
    title: "Manufactures",
    description: "Records (2)",
    icon: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fsquares.svg",
  },
  {
    title: "Distributors",
    description: "Records (12)",
    icon: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fsquares.svg",
  },
  {
    title: "Products",
    description:
      "Records (29)",
    icon: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fsquares.svg",
  },
];



  return (
<>
<div className="dashBoardParent">


    <section id="services-690">
      <div className="cs-container">
        <div className="cs-content">
          <div className="cs-flex-group">
            <span className="cs-topper">Admin Dashboard</span>
          </div>
        </div>
        <ul className="cs-card-group">
          {services.map((service, index) => (
            <li className="cs-item" key={index}>
              <a href="#" className="cs-link">
                <picture className="cs-picture">
                  <img className="cs-icon" src={service.icon} loading="lazy" decoding="async" alt="icon" width="32" height="32" aria-hidden="true" />
                </picture>
                <h3 className="cs-h3">{service.title}</h3>
                <p className="cs-item-text">
                  {service.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
</div>

</>
  )
}

export default Dashboard