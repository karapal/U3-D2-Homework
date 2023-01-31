
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavComponent from "./components/MyNavComponent";
import FooterComponent from "./components/MyFooterComponent"
import WelcomeComponent from './components/WelcomeComponent';
import AllTheBooks from './components/AllTheBooksComponent';

function App() {
  return (
    <div className="App">
      <NavComponent title="EpiBooks" navitems={["Home", "About", "Browse"]}/>
      <WelcomeComponent/>
      <AllTheBooks/>
      <footer className="fixed-bottom">
        <FooterComponent link="epicode.com"/>
      </footer>
    </div>
  );
}

export default App;
