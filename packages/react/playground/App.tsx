import { AddCircle } from '../src';
import * as Icons from '../src';

function App() {
    return (
        <main>
            <h1>Icons {Object.keys(Icons).length}</h1>
            <AddCircle color='red' data-id="888" className="add-class" />
            <AddCircle color='green' />
            <AddCircle color="royalblue" size={64} />
            <AddCircle color="orange" size={32} />
        </main>
    );
}

export default App;
