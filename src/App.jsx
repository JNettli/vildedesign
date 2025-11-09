import "./App.css";

function App() {
    return (
        <>
            <div className="bg-slate-800 h-screen text-center">
                <div className="pt-32 pb-8">
                    <p className="text-white text-5xl font-bold">
                        Vilde Rognlien Portefølje
                    </p>
                </div>
                <p className="text-white">
                    Siden er under konstruksjon! Midlertidig sjekk ut{" "}
                    <a
                        href="https://www.instagram.com/grafiskdesignervilde"
                        target="_blank"
                        className="underline hover:text-amber-600 transform duration-200"
                    >
                        instagram
                    </a>{" "}
                    eller{" "}
                    <a
                        href="https://www.linkedin.com/in/vilde-rognlien-6b377236b/"
                        target="_blank"
                        className="underline hover:text-amber-600 transform duration-200"
                    >
                        linkedIn
                    </a>
                    !
                </p>
            </div>
        </>
    );
}

export default App;
