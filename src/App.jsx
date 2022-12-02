import { useState } from "react"
import HomePage from "./screens/HomePage/HomePage"
import CartPage from "./screens/CartPage/CartPage"
import Header from "./components/Header"
import { getItem, setItem } from "./services/LocalStorageFuncs"

function App(){

  const [activeScreen, setActiveScreen] = useState ("HomePage")

  const [cart, setCart] = useState(getItem("cartFull") || [])

  const [filterText, setFilterText] = useState("")

  const [minValue, setMinValue] = useState("")
  const [maxValue, setMaxValue] = useState("")

  const [order, setOrder] = useState("")

  const goToHomePage = () => setActiveScreen("HomePage")
  const goToCartPage = () => setActiveScreen("CartPage")

  function addCart(productAdd){
      const newCart = [...cart]

      const productFound = newCart.find(
        (productInCart) => productInCart.id === productAdd.id
      )
      if (!productFound){
        const newProduct = {...productAdd, quantity: 1}
        newCart.push(newProduct)
      }else{
        productFound.quantity++
      }
      setCart(newCart)
      setItem("cartFull", newCart)
  }

  const deleteCart = (productDelete) => {
    const newCart = [...cart]

    const indexFound = newCart.findIndex(
      (productInCart) => productInCart.id === productDelete.id
    )
    newCart.splice(indexFound, 1)
    setCart(newCart)
    setItem("cartFull", newCart)
  }

  const onChangeFilterText = (e) => {
    setFilterText(e.target.value)
  }

  const renderScreen = () => {
    switch (activeScreen){
      case "HomePage":
        return <HomePage
         addCart={addCart}
         filterText={filterText}
         minValue={minValue}
         setMinValue={setMinValue}
         maxValue={maxValue}
         setMaxValue={setMaxValue}
         order={order}
         setOrder={setOrder}
         />
      case "CartPage":
        return <CartPage 
        cart={cart}
        deleteCart={deleteCart}/>
        default:
          return <div>Pagina não encontrada</div>
    }
  } 
    return( 
      <>
      <Header
        goToCartPage={goToCartPage}
        goToHomePage={goToHomePage} 
        ItemsCart={cart.length}
        onChangeFilterText={onChangeFilterText}
        filterText={filterText}
        />
      {renderScreen()}
      </>  
)
} export default App