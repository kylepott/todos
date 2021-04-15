import { useState } from "react";

const Index = () => {
    const [items, setItems] = useState<string[]>(["hello","world"]);
    const [newTodo, setNewTodo] = useState("");

    
    const addTodo = (newTodo: string) => {
        setItems([...items, newTodo]);

        };

    return (
    <div>
        <header className="w-full flex items-center justify-center p-4 shadow text-l">Do what’s essential.</header>
        <div>
            <form className="w-full flex items-center justify-center gap-4 p-4" onSubmit={(e) => {
                e.preventDefault();
                addTodo(newTodo);
                    
                    
                    }}>
                <input className="w-full flex items-center border-black shadow h-10 p-2 justify-center" type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
                <button className="bg-green-400 text-white p-4 flex"  >Add</button>
            </form>
        </div>
        <main>
            
            <ul>
                {items.map((n,i) => <li className="text-l" key={i}><input type="checkbox" className="m-3 ml-5 h-4 w-4"/>{n}</li>)}
            </ul>
            
        </main> 

    </div>

           )       }

export default Index;