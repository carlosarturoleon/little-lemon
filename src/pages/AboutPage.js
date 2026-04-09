function AboutPage() {
  return (
    <>
      <section className="about">
        <div className="about__inner container">
          <div className="about__text">
            <h1>About Us</h1>
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
            <p>
              From humble beginnings in a small Chicago kitchen, Little Lemon has grown
              into a beloved neighborhood restaurant. We believe great food brings
              people together, and every dish we serve is made with that spirit in mind.
            </p>
          </div>
          <div className="about__images">
            <img
              src="/Applying design fundamentals in Figma - Assets/Mario and Adrian A.jpg"
              alt="Mario and Adrian, owners of Little Lemon"
              className="img--rounded about__img about__img--top"
            />
            <img
              src="/Applying design fundamentals in Figma - Assets/Mario and Adrian b.jpg"
              alt="Mario and Adrian in the restaurant"
              className="img--rounded about__img about__img--bottom"
            />
          </div>
        </div>
      </section>

      <section className="about-team" aria-label="Our team">
        <div className="container">
          <h2>Meet the Team</h2>
          <div className="about-team__cards">
            <article className="team-card">
              <img
                src="/Applying design fundamentals in Figma - Assets/restaurant chef B.jpg"
                alt="Head chef at Little Lemon"
                className="team-card__img img--rounded"
              />
              <h3>Chef Marco</h3>
              <p>Head Chef — 15 years of Mediterranean cuisine experience.</p>
            </article>
            <article className="team-card">
              <img
                src="/Applying design fundamentals in Figma - Assets/restaurant.jpg"
                alt="Little Lemon restaurant interior"
                className="team-card__img img--rounded"
              />
              <h3>Our Kitchen</h3>
              <p>Every dish is prepared fresh daily using locally sourced ingredients.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
