import { portfolioData } from "../data/portfolioData"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">{portfolioData.personal.title}</h1>
      </div>
    </section>
  )
}

export default Hero
