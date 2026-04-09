import { Link } from 'react-router-dom';

const orderItems = [
  { name: 'Greek Salad', price: '$12.99', image: '/Applying design fundamentals in Figma - Assets/greek salad.jpg', alt: 'Greek Salad' },
  { name: 'Bruschetta', price: '$5.99', image: '/Applying design fundamentals in Figma - Assets/bruchetta.svg', alt: 'Bruschetta' },
  { name: 'Lemon Dessert', price: '$5.00', image: '/Applying design fundamentals in Figma - Assets/lemon dessert.jpg', alt: 'Lemon Dessert' },
];

function OrderPage() {
  return (
    <section className="order-page" aria-label="Order online">
      <div className="container">
        <h1>Order Online</h1>
        <p className="order-page__subtitle">Enjoy Little Lemon at home. Select your items and we'll deliver to your door.</p>

        <div className="specials__cards" role="list" aria-label="Menu items available for delivery">
          {orderItems.map((item) => (
            <article key={item.name} className="card" role="listitem">
              <img src={item.image} alt={item.alt} className="card__image" />
              <div className="card__body">
                <div className="card__title-row">
                  <h3 className="card__name">{item.name}</h3>
                  <span className="card__price" aria-label={`Price: ${item.price}`}>{item.price}</span>
                </div>
                <button className="btn" aria-label={`Add ${item.name} to cart`}>Add to Cart</button>
              </div>
            </article>
          ))}
        </div>

        <div className="order-page__cart">
          <img
            src="/Applying design fundamentals in Figma - Assets/Basket.svg"
            alt=""
            aria-hidden="true"
            className="order-page__cart-icon"
          />
          <p>Your cart is empty. Add items above to get started.</p>
          <Link to="/menu" className="btn btn--dark">Browse Full Menu</Link>
        </div>
      </div>
    </section>
  );
}

export default OrderPage;
