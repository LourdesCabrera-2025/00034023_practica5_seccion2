import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {getImageUrl} from './utils.js'

function MyButton(props) {
 return (
  <button onClick={props.Fn}>Soy un boton y mi cuenta es : {props.count}</button>

 );
}

function Avatar({person, size}) {
  return (
    <img
      className="Avatar"
      src={getImageUrl(person)}
      alt={person.name}
      witdh={size}
      height={size}
    />
  );
}


function App() {
  const [count, setCount] = useState(0)
  const increment = () => setCount((count) => count +1);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
       {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <MyButton count ={count} Fn={increment}>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </MyButton>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


function Profile() {
  return(
    <div>
      <Avatar 
      size={100}
      person={{
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2'
      }}/>
      <Avatar
      size={80}
      person={{
        name: 'Aklilu Lemma',
        imageId: 'OJ567lh'
      }}/>
      <Avatar
      size={50}
      person={{
        name: 'Lin Lanying',
        imageId: '1bX5QH6'
      }}
      />
    </div>
  );
}

export default App;