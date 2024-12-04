import{useState} from 'react';
import './App.css';

function App() {

  

  const [formData, setFormData] = useState( {firstname:"", lastname:"", email:"",comments:"",isVisible:true, mode:"",favCar:""});
  console.log(formData)
  function changeHandler(event){
    const {name,value,checked,type} = event.target
    setFormData(prevFormData => {
      return{
      ...prevFormData,
      [name]: type ==="checkbox" ? checked : value
      }
    });
   
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("finally printing");
    console.log(formData)
  }
  return (
    <div className='flex flex-col items-center'>

      <form onSubmit={submitHandler}>

        <input type="text"
        placeholder="firstname"
        onChange={changeHandler}
        name="firstname"
        value={formData.firstname}
        className='outline'
        />
        <label htmlFor='firstname'>First Name</label>


<br/>
<br/>
<input type="text"
        placeholder="lastname"
        onChange={changeHandler}
        name="lastname"
        value={formData.lastname}
        className='outline'/>
        <label htmlFor='lastname'>Last Name</label>


        <br/>
        <br/>
        <input type="email"
        placeholder="email"
        onChange={changeHandler}
        name="email"
        value={formData.email}/>
                <label htmlFor='isVisible'>Am I visible?</label>


        <br/><br/>
        <textarea
        placeholder='enter your comments here'
        onChange={changeHandler}
        name='comments'
        value={formData.comments}>
                  <label htmlFor='isVisible'>Am I visible?</label>

          
        </textarea>

        <input
        type='checkbox'
        onChange={changeHandler}
        name='isVisible'
        id="isVisible"
        checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am I visible?</label>

        <br></br>
        <br></br>
        <fieldset>
          <legend>Mode:</legend>
          <input
      type='radio'
      onChange={changeHandler}
      name='mode'
      value="Online-Mode"
      id='Online-Mode'
      checked={formData.mode === "Online-Mode"}
/>
      <label htmlFor='Online-mode'>Online-Mode</label>

      <br></br>
        <br></br>
      <input
      type='radio'
      onChange={changeHandler}
      name='mode'
      value="Offline-Mode"
      id='Offline-Mode'
      checked={formData.mode === "Offline-Mode"}
/>
      <label htmlFor='Offline-mode'>Offline-Mode</label>
        </fieldset>
        <label htmlFor='favCar'>Tell me your favourite car</label>

        <select
        name='favCar'
        id='favCar'
        value={formData.favCar}
        onChange={changeHandler}
        >
        <option value="scorpio">scorpio</option>
        <option value="swift">swift</option>
        <option value="aulto">aulto</option>
        <option value="nano">nano</option>


        </select>

        <button>Submit</button>
      
      </form>
    </div>
  );
}

export default App;
