import {Link} from 'react-router-dom'
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <h1>find great deals customized for your need</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search service or product"
            className="search-input"
          />
          <span className="search-icon">
            <i class="fas fa-search"></i>
          </span>
        </div>
        <div className="filter">
          <div className="filter__radio">
            <input type="radio" name="search" id="product" value="Product" />
            <label htmlFor="product">Product</label>
            <input type="radio" name="search" id="service" value="Service" />
            <label htmlFor="service">Service</label>
            <input type="radio" name="search" id="jobs" value="Jobs" />
            <label htmlFor="jobs">Jobs</label>
          </div>
          <Link to='/' className='filter__advanced'>advanced search</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;