const testimonials = [
  { id: 1, name: 'Sarah M.', rating: 5, review: 'Amazing food and great atmosphere. The Greek salad was absolutely perfect!' },
  { id: 2, name: 'James R.', rating: 5, review: 'Best lemon dessert in Chicago. We will definitely be coming back!' },
  { id: 3, name: 'Emily K.', rating: 4, review: 'Wonderful family restaurant with authentic Mediterranean flavors.' },
  { id: 4, name: 'Carlos T.', rating: 5, review: 'The bruschetta was incredible. Highly recommend this place to everyone.' },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonials__cards">
          {testimonials.map((t) => (
            <article key={t.id} className="testimonial-card">
              <p className="testimonial-card__rating">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</p>
              <div className="testimonial-card__profile">
                <div className="testimonial-card__avatar" aria-hidden="true">{t.name[0]}</div>
                <span className="testimonial-card__name">{t.name}</span>
              </div>
              <p className="testimonial-card__review">"{t.review}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
