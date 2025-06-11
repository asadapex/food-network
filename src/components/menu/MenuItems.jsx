const MenuItems = ({ image, title, price, desc, stars }) => {
  return (
    <div className="menu-item">
      <img src={image} alt="Food image" />

      <div>
        <h2>{title}</h2>
        <h2>{price}</h2>
      </div>

      <p>{desc}</p>

      <button>+</button>

      <div>
        {Array.from({ length: stars }, (_, i) => (
          <span key={i}>🌟</span>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
