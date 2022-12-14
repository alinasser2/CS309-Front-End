import React,{UseState} from 'react';
import  Input  from '../components/Input';
import valit from 'valit';

function login() {
  const[data,setData]= UseState({
    email:'',
    password:''
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
    <h1>login</h1>
    <Input label="Username" inputName="username" data={data}/>
    </>
  );
}

export default Login