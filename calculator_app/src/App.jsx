import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="container max-w-xs p-4 bg-white shadow-lg rounded-lg">
          <form>
            <div className="mb-4">
              <input
                type="text" className="w-full p-4 text-right text-2xl bg-gray-100 rounded-lg focus:outline-none" value = {value}              
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <input type="button" value="AC" className="p-4 bg-red-500 text-white rounded-lg hover:bg-red-600"  onClick={() => setValue('')} />
              <input type="button" value="DE" className="p-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600" onClick = {e => setValue (value.slice (0, -1))}/>
              <input type="button" value="." className="p-4 bg-gray-300 text-black rounded-lg hover:bg-gray-400" onClick = {e => setValue (value + e.target.value)}/>

              <input type="button" value="/" className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick = {e => setValue (value + e.target.value)}/>
              <input type="button" value="7" className="p-4 bg-gray-300 text-black rounded-lg hover:bg-gray-400" onClick = {e => setValue (value + e.target.value)}/>
              <input type="button" value="8" className="p-4 bg-gray-300 text-black rounded-lg hover:bg-gray-400"onClick = {e => setValue (value + e.target.value)}/>
              <input type="button" value="9" className="p-4 bg-gray-300 text-black rounded-lg hover:bg-gray-400" onClick = {e => setValue (value + e.target.value)}/>
              <input type="button"  value="*"className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick = {e => setValue (value + e.target.value)}/>

              <input type="button" value="4" className="p-4 bg-gray-300 text-black rounded-lg hover:bg-gray-400"onClick = {e => setValue (value + e.target.value)}/>
              <input type="button" value="5" className="p-4 bg-gray-300 text-black rounded-lg hover:bg-gray-400"onClick = {e => setValue (value + e.target.value)}/>
              <input type="button" value="6"  className="p-4 bg-gray-300 text-black rounded-lg hover:bg-gray-400" onClick = {e => setValue (value + e.target.value)}/>
              <input type="button" value="+"  className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick = {e => setValue (value + e.target.value)}/>

              <input type="button" value="1" className="p-4 bg-gray-300 text-black rounded-lg hover:bg-gray-400" onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="2" className="p-4 bg-gray-300 text-black rounded-lg hover:bg-gray-400"  onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="3"  className="p-4 bg-gray-300 text-black rounded-lg hover:bg-gray-400"  onClick={(e) => setValue(value + e.target.value)}           />
              <input type="button" value="-" className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={(e) => setValue(value + e.target.value)}/>

              <input type="button" value="00" className="p-4 bg-gray-300 text-black rounded-lg hover:bg-gray-400 col-span-2" onClick={(e) => setValue(value + e.target.value)}/>
              <input type="button" value="0"className="p-4 bg-gray-300 text-black rounded-lg hover:bg-gray-400" onClick={(e) => setValue(value + e.target.value)}/>
            
              <input type="button" value="=" className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600" onClick = {e => setValue (eval(value))}/> 
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
