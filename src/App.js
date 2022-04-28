import { useState, useEffect } from 'react';
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time');
  useEffect(() => {
    console.log('CALL THE ATI...');
  }, []);
  useEffect(() => {
    if (keyword != '' && keyword.length > 4) {
      console.log('SEARCH FOR', keyword);
    }
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        type='text'
        placeholder='Search here...'
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
