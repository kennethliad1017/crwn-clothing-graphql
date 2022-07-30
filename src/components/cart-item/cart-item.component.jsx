import {
  CartItemContainer,
  ProductImage,
  ItemDetails,
  ProductName,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ProductName className="name">{name}</ProductName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
