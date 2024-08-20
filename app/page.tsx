import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

export default function Home() {
    return (
        <div className="flex flex-col items-center h-screen bg-fuchsia-400">
            <Header></Header>
            <Footer></Footer>
        </div>
    );
}
