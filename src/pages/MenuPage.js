import { Link } from 'react-router-dom';

const menuSections = [
  {
    id: 1,
    category: 'Starters',
    items: [
      { name: 'Greek Salad', price: '$12.99', description: 'Crispy lettuce, peppers, olives and Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.', image: '/Applying design fundamentals in Figma - Assets/greek salad.jpg', alt: 'Greek Salad' },
      { name: 'Bruschetta', price: '$5.99', description: 'Grilled bread smeared with garlic and seasoned with salt and olive oil, topped with fresh tomatoes.', image: '/Applying design fundamentals in Figma - Assets/bruchetta.svg', alt: 'Bruschetta' },
    ],
  },
  {
    id: 2,
    category: 'Desserts',
    items: [
      { name: 'Lemon Dessert', price: '$5.00', description: "Straight from grandma's recipe book. Every ingredient carefully chosen and as authentic as it gets.", image: '/Applying design fundamentals in Figma - Assets/lemon dessert.jpg', alt: 'Lemon Dessert' },
    ],
  },
];

function MenuPage() {
  return (
    <section className="menu-page" aria-label="Full menu">
      <div className="container">
        <h1>Our Menu</h1>
        <p className="menu-page__subtitle">Fresh Mediterranean cuisine, made with locally sourced ingredients.</p>

        {menuSections.map((section) => (
          <div key={section.id} className="menu-section">
            <h2 className="menu-section__title">{section.category}</h2>
            <div className="specials__cards">
              {section.items.map((item) => (
                <article key={item.name} className="card">
                  <img src={item.image} alt={item.alt} className="card__image" />
                  <div className="card__body">
                    <div className="card__title-row">
                      <h3 className="card__name">{item.name}</h3>
                      <span className="card__price" aria-label={`Price: ${item.price}`}>{item.price}</span>
                    </div>
                    <p className="card__description">{item.description}</p>
                    <Link to="/order" className="card__link" aria-label={`Order ${item.name} for delivery`}>Order a delivery &#x1F6B4;</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuPage;
