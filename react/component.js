
import './App.css';

function Welcome({ name, age }) {

    return <h1>Welcome to the React class

        {/* {props.name} age:{props.age}  */}

        {name} age:{age}

    </h1>
}

function App() {
    return (
        <div className="app">
            <Welcome name='Omkar' age={20} />
            <Welcome name='Preeti' age={21} />
            <Welcome name='Vishal' age={22} />
            <Welcome name='Jayesh' age={23} />
        </div>
    );
}

export default App;
