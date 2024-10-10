import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.module.css"
function App() {
  return (
    <div className={`d-flex flex-column bg-main`}>
      <Header />
      <div className="flex-fill">
        <h1 className="text-3xl text-fuchsia-950">App</h1>

      </div>
      <Footer />
    </div>
  );
}
export default App;
