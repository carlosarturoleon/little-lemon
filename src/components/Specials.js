import { Link } from 'react-router-dom';

const specials = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: '/Applying design fundamentals in Figma - Assets/greek salad.jpg',
    alt: 'Greek Salad',
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: '/Applying design fundamentals in Figma - Assets/bruchetta.svg',
    alt: 'Bruschetta',
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: '$5.00',
    description:
      "This comes straight from grandma's recipe book. Every ingredient has been carefully chosen and is as authentic as it gets.",
    image: '/Applying design fundamentals in Figma - Assets/lemon dessert.jpg',
    alt: 'Lemon Dessert',
  },
];

function Specials() {
  return (
    <section className="specials" aria-label="Weekly specials">
      <div className="specials__header container">
        <h2>This week's specials!</h2>
        <Link to="/menu" className="btn">Online Menu</Link>
      </div>
      <div className="specials__cards container">
        {specials.map((dish) => (
          <article key={dish.id} className="card">
            <img src={dish.image} alt={dish.alt} className="card__image" />
            <div className="card__body">
              <div className="card__title-row">
                <h3 className="card__name">{dish.name}</h3>
                <span className="card__price" aria-label={`Price: ${dish.price}`}>{dish.price}</span>
              </div>
              <p className="card__description">{dish.description}</p>
              <Link to="/order" className="card__link" aria-label={`Order ${dish.name} for delivery`}>Order a delivery &#x1F6B4;</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
