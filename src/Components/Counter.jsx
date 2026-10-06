import { useState } from "react";
import "./App.css";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div className="container">
            <h1>Counter using Functional Component</h1>

            <div className="card">
                <h2>Count: {count}</h2>

                <button onClick={increment}>
                    Increment
                </button>
            </div>
        </div>
        
    );
}

export default Counter;
