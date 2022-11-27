import "./App.css";

// Gebe der importieren Komponente den Namen "FirstSection"

// import FirstSection from "./components/";
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';



// Das hier ist schon eine Component
// function ComponentName() {
//   return (
//     <div>
  
//     </div>
//   );
// }

function App() {
  return (
    // Hier wird class="App" angesetzt aber class ist ein reserviertes keyword -> className
    <section className="App">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;


