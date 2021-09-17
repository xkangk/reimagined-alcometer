import {useState} from 'react'
import './App.css';
import FillOptions from './FillOptions';

function App() {
  const [gender,setGender] = useState("male");
  const [weight,setWeight] = useState(0);
  const [bottles,setBottles] = useState(0);
  const [time,setTime] = useState(0);
  const [result,setResult] = useState("");

  function calculate(e){
  e.preventDefault();
  const liters = bottles * 0.33;
  const grams = liters * 8 * 4.5;
  const burning = weight /10;
  const left = grams - (burning * time);
let result = 0;


    if (gender ==="male") {
      result = (left / (0.7 * weight));
    } else{
      result = (left / (0.6 * weight));

    }if (result < 0) {
      return setResult(result=0);
    } else {
    setResult(result.toFixed(2));
  }
}
  return (


<div id="container">
  <h3>Calculate alcohol blood level</h3>
      <form onSubmit={calculate}>
      <div> 
        <label>Weight: </label>
        <input name ="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div> 
        <label>Bottles: </label>

      <select value={bottles}
 onChange={e=>setBottles(e.target.value)} >
<FillOptions />
 </select> 
      </div>
      <div> 
        <label>Time: </label>
        <select value={time}
 onChange={e=>setTime(e.target.value)} >
<FillOptions />
 </select>
      </div>
      <div>
      <label>Gender: </label>
       <input type="radio" name="gender" value="male" defaultChecked onChange={e=> setGender(e.target.value)} /><label>Male</label>
       <input type="radio" name="gender" value="female" onChange={e=> setGender(e.target.value)} /><label>Female</label>
       </div>
       <div>
       <output>{result}</output>
       </div>
       <div>
       <button>Laske</button>
       </div>


</form> </div>
  );
}

export default App;
