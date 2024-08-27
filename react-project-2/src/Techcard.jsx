import { useContext, useState } from "react";
import Emojibutton from "./EmojiButton";
import { ShopContext } from "./ShopContext/ShopContext"
import { Link } from "react-router-dom";

function Techcard({
    name,
    attributes,
    price,
    image = "https://hnau.imgix.net/media/catalog/product/a/u/au_407_3.jpg?auto=compress&auto=format&fill-color=FFFFFF&fit=fill&fill=solid&w=992&h=558",
}) {
    const [inCart, setInCart] = useState(false);
    const { addToCart } = useContext(ShopContext);

    function handleClick() {
        setInCart(!inCart);
    }

    const techLis = attributes.map((attribute) => {
        return <li key={attribute}> {attribute}</li>;
    });

    return (
        <div className="card">
            <h2>{name}</h2>
            <img src={image} alt="tech product" />
            <h3>Features</h3>
            <ul>{techLis}</ul>
            <h4>Price {price}</h4>
            <div onClick={handleClick} >
                {inCart ? (
                    <Emojibutton emoji="🛒" label="Remove from cart" />
                ) : (
                    <Emojibutton onClick={() => { addToCart(product.id) }} emoji="🛒" label="Add to cart" />
                )}
            </div>
        </div>
    );
}

export default Techcard;
