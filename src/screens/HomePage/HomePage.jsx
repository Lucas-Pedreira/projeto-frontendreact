import Cards from "../../components/Cards"
import Products from "../../components/Products"
import { Main } from "./HomePage.styled"

function HomePage(props){
    const {goToCartPage} = props

    const {
      addCart, filterText,} = props

    const filterProducts = () => {
      return Products.filter((product) => product.name.toLowerCase().includes(filterText.toLowerCase()))
    .filter((product) =>{
      return product.value >= props.minValue || props.minValue === ""
    })
    .filter((product) =>{
      return product.value <= props.maxValue || props.maxValue === ""
    })
    .sort((a,b) =>{
      return a.year - b.year
    })
    .sort((a,b) =>{
      return a.value - b.value
    })
    .sort(() =>{
      if (props.order === "cresPrice"){
        return 0
      }else{
        return -1
      }
    })
  }

  return (
    <Main>
      <section>
        <div className="filtros">
        <h1>Satélites</h1>
        <div className="filter-order">
            <h4>Filtrar por preço:</h4>
            <input placeholder="Preço min" type="number" 
            value={props.minValue} onChange={(e) => props.setMinValue(e.target.value)}/><br/>
            <input placeholder="Preço max" type="number" 
            value={props.maxValue} onChange={(e) => props.setMaxValue(e.target.value)}/>
          </div>
          <div>
            <br/>
            <h4>Ordernar por preço:</h4>
            <select 
            value={props.order}
            onChange={(e) => {props.setOrder(e.target.value)}}>
              <option value="cresPrice">Crescente</option>
              <option value="decPrice">Decrescente</option>
            </select>
          </div>
        </div>
        <hr />
        {
          filterProducts()
          .map((product) => (
            <Cards 
            key={product.id} 
            product={product} 
            addCart={addCart}
            onHomePage={true} />
          ))
        }
      </section>

    </Main>
    
  )
} export default HomePage