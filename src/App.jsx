import "./App.css"

import Header from "./header";
import Navbar from "./navbar";
import Card from "./Card";

const App=()=>
{
  return(
    <>
    <Header/>
    <div className="body">
      <Navbar/>
      <Card/>
    </div>
    </>
  )
}

export default App;