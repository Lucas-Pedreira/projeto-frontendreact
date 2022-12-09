import { HeaderContainer } from "./Header.styled"

import { FaShoppingCart } from "react-icons/fa"


function Header(props){
    const {
        goToCartPage,
        goToHomePage,
        itemsCart,
        onChangeFilterText,
        filterText
      } = props

    return (
      <HeaderContainer>
        <h1>
        <a onClick={goToHomePage}>
            Ligthyear<br/>
            Store
        </a>
        </h1>
        <div>
        <input placeholder="Pesquisar"
        value={filterText}
        onChange={onChangeFilterText}/>
        </div>

        <button onClick={goToCartPage}>
            <FaShoppingCart />
            {
              itemsCart > 0
              && <span>{itemsCart}</span>
            }
        </button>
      </HeaderContainer>
    )
  } export default Header