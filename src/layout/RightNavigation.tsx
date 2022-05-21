import styled from "styled-components";
import { device } from "../constants";
import IconButton from "../components/IconButton";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";
import { Settings } from "@styled-icons/fluentui-system-regular/Settings";
import { useAppDispatch, useAppSelector } from "../data/hooks";
import {
  closeCart,
  removeFromCart,
  selectCartOpen,
  selectCartItems,
  selectCartSubtotal,
} from "../data/cartSlice";
import CartItem from "../components/CartItem";

const RightNavigationStyled = styled("div")<{ open: boolean }>`
  background-color: white;
  width: ${(props) => (props.open ? "350px" : "0")};
  height: 100vh;
  right: 0;
  display: flex;
  position: fixed;
  flex-direction: column;
  .cartHeaderContainer {
    height: 100px;
    display: flex;
    align-items: center;
  }
  .closeButtonContainer {
    position: absolute;
    left: -18px;
    top: 26px;
    display: ${(props) => (props.open ? "block" : "none")};
    > button {
      border-radius: 18px;
      box-shadow: 1px 1px 1px 1px lightgrey;
    }
  }
  .cartHeaderText {
    flex: 1;
    font-size: 0.9em;
    font-weight: bold;
    padding-left: 30px;
  }
  .settingsButtonContainer {
    font-size: 0;
    padding-right: 20px;
  }
  .cartItemContainer {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
  }
  .totalContainer {
  }
  @media ${device.tablet} {
    width: ${(props) => (props.open ? "100%" : "0")};
    height: calc(100vh - 70px);
    .closeButtonContainer {
      left: 10px;
    }
    .cartHeaderText {
      padding-left: 60px;
    }
  }
`;

const RightNavigation = () => {
  const cartOpen = useAppSelector(selectCartOpen);
  const cartItems = useAppSelector(selectCartItems);
  const subTotal = useAppSelector(selectCartSubtotal);
  const dispatch = useAppDispatch();

  return (
    <RightNavigationStyled open={cartOpen}>
      <div className="cartHeaderContainer">
        <div className="closeButtonContainer">
          <IconButton
            icon={<ChevronRight />}
            onClick={() => dispatch(closeCart())}
          />
        </div>
        <div className="cartHeaderText">Current Order</div>
        <div className="settingsButtonContainer">
          <IconButton icon={<Settings />} />
        </div>
      </div>
      <div className="cartItemContainer">
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.product.id}
            cartItem={cartItem}
            onRemoveItem={() => dispatch(removeFromCart(cartItem.product.id))}
          />
        ))}
      </div>
      <div className="totalContainer">{subTotal}</div>
    </RightNavigationStyled>
  );
};
export default RightNavigation;
