// import { useState } from 'react'
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import './App.css'

const App = ()=> {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen ">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
      h1jgtj
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
    </>
  )
}

export default App



// const App = () => (
//   <div className="min-h-screen bg-red-500">
//     <div className="gradient-bg-welcome">
//       <Navbar />
//       <Welcome />
//     </div>
//     <Services />
//     <Transactions />
//     <Footer />
//   </div>
// );

// export default App;