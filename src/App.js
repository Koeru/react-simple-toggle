import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

const App = () => {
  const initialVal = true
  const [toggleVal, setToggleValue] = useState(initialVal);

  const [favPerson, setFavValue] = useState(true);

  return (
    <>
      <p>現在の性別は <strong>{toggleVal ? "男" : "女"}</strong> です</p>

      <button onClick={() => setToggleValue(prevState => !prevState)}>
        転換する
      </button>

      <button onClick={() => setToggleValue(initialVal)}>
        リセット
      </button>

      <p>好きな人は <strong>{favPerson ? "さき" : "LiDAR"}</strong> です</p>
      <button onClick={() => setFavValue((Math.random() - 0.3)>0 ? true : false) }>
        占う
      </button>
    </>
  );
}

export default App;
