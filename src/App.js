import { Footer } from 'components/Footer';
import { Header } from 'components/Header'
import { ListProducts } from 'components/ListProducts';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <ListProducts />
            <Footer />
        </div>
    );
}

export default App;
