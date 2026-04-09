function About() {
  return (
    <section className="about">
      <div className="about__inner container">
        <div className="about__text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant. To craft an authentic menu, the pair are inspired by their
            mother's recipes and have a passion for using locally sourced produce.
          </p>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist. Our menu changes with the seasons
            and we source all of our ingredients locally.
          </p>
        </div>
        <div className="about__images">
          <img
            src="/Applying design fundamentals in Figma - Assets/Mario and Adrian A.jpg"
            alt="Mario and Adrian"
            className="img--rounded about__img about__img--top"
          />
          <img
            src="/Applying design fundamentals in Figma - Assets/restaurant chef B.jpg"
            alt="Restaurant chef"
            className="img--rounded about__img about__img--bottom"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
