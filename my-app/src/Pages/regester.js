import React,{UseState} from 'react'
import  Input  from '../components/Input';
import valit from 'valit';

function Regester() {

  const[data,setData]= UseState({
    username:'',
    email:'',
    password:'',
    confirm_password:'',
    phone:'',
    city:'',
    state:''

  });

  const[errors,setErrors]= UseState({})

  const schema ={ 
    username: valit.creatSchema(valit.string,valit.isRequiered,{
        min:5,
        max:30,
        label:'Username',

    }),
     password:valit.creatSchema(valit.string,valit.isRequiered,{
      min:8,
      max:50,
      label:'Password',

  })



  }

  return (
      <>
    <h1>cxmf</h1>
    <Input label="Username" inputName="username" data={data}/>
     </>
  );
}

export default Regester
