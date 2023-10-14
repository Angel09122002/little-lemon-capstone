import React from "react";
import dish2 from "../../assets/bruschetta.jpg";
import dish1 from "../../assets/greek salad.jpg";
import dish3 from "../../assets/lemon.jpg";
import "../../styles/specialCards.css";

const SpecialsCard = () => {
  const specialMenus = [
    {
      image: dish1,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic.",
      order: "Order a delivery",
    },
    {
      image: dish2,
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
      order: "Order a delivery",
    },
    {
      image: dish3,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
      order: "Order a delivery",
    },
  ];

  const specialMenusItems = specialMenus.map((menu, index) => {
    const { image, title, price, description, order } = menu;

    return (
      <div>
        <div className="special-container">
          <div className="image-container">
            <img src={image} alt="Dessert" />
          </div>

          <div className="special-text">
            <div className="special-card-title">
              <h3>{title}</h3>
              <h3 className="price-tag">{price}</h3>
            </div>
            <p>{description}</p>

            <h4 className="order-btn">{order}</h4>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="special-card">{specialMenusItems}</div>
    </div>
  );
};

export default SpecialsCard;
