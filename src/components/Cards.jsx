import { valueDollar } from "../utils/valueDollar"
import { CardsContainer } from "./Cards.styled"
import { FaTrash } from "react-icons/fa"


function Cards(props){
    const { 
        product,
        addCart,
        deleteCart,
        onHomePage,
        onCartPage,
        } = props

    return(
            <CardsContainer> 
            <div key={product.id}>
                <img src={product.image} alt={product.imageAlt} />
                <div className="name-year">
                    <h3>{product.name}</h3>
                    <span>{product.year}</span>
                </div>
                <div className="price-button">
                    <h4>{valueDollar.format(product.value)}</h4>
                    {onHomePage && <button onClick={() => addCart(product)}>Adicionar ao carrinho</button>}
                    {onCartPage && <span>Quantidade{product.quantity}</span>}
                    {onCartPage && <button onClick={() => deleteCart(product)}><FaTrash/></button>}
                </div>
                </div>
            </CardsContainer>
    )
}

export default Cards