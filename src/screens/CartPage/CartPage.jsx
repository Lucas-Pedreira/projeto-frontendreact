import Cards from "../../components/Cards"
import { valueDollar } from "../../utils/valueDollar"
import { Main } from "./CartPage.styled"


function CartPage(props){
    const {goToHomePage} = props
    const {
      cart,
      deleteCart,
      } = props
    

    const cartPrice = cart.reduce(
      (acc, product) => product.value * product.quantity + acc,
      0
    )
  return (
    <Main>
      <section>
        <h1>Seu carrinho = {valueDollar.format(cartPrice)}</h1>
        <hr />
        {
          cart
          .map((product) => (
            <Cards 
            key={product.id} product={product}
            deleteCart={deleteCart}
            onCartPage={true}
             />
          ))
        }
      </section>
    </Main>
  )
} export default CartPage