import React,{useState} from 'react';


const Form = (props) => {

  const [name, setName] = useState('');
  const [email,setEmail] = useState('');

  const handleChangeName= (e)=>{
    //console.log("e",e.target.value)
    setName(e.target.value)
  }
  const handleChangeEmail= (e)=>{
    //console.log("e",e.target.value)
    setEmail(e.target.value)
  }


  const  handleSubmit=(event)=>{
    event.preventDefault();
    //console.log('form',name,email)

    const fromData={
      name:name,
      email:email,
    }
    props.handleFromSumbit(fromData)
    
  }


    return (
      
        <div>
         
     
          <form 
            style={{
              display:'flex',
              flexDirection: 'column',
              gap: '20px'
              
            }}
            
            onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" 
          //value={state.value} 
          onChange={handleChangeName}  
          />
        </label>
        <label>
          Email:
          <input type="text" 
          //value={state.value} 
          onChange={handleChangeEmail}  
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

        </div>
    );
}

export default Form;
