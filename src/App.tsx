import './App.css';
import { ChangeEvent, useState } from 'react';

function App() {
  const [value, setValue] = useState('0');
  const [error, setError] = useState('');
  const regex = /^[01]*$/;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputEvent = e.nativeEvent as InputEvent;
    const data = inputEvent.data;
    if (data != null && !regex.test(data)) {
      setError(`You must only enter a 1 or a 0! You entered: "${data}"`)
      return;
    }
    setError('')
    setValue(e.target.value);
  };

  return (
    <>
      <label id="inputLabel" htmlFor="input">
        Binary:
      </label>
      <input
        id="input"
        type="text"
        maxLength={8}
        value={value}
        onChange={handleChange}
      ></input>
      { error !== '' && (<><span id='errorMessage'>{error}</span></>)}
      <br/>
      <span>Result: {Number(`0b${value !== '' ? value : 0}`)}</span>
    </>
  );
}

export default App;
