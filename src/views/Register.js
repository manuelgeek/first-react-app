import React from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import {Counter} from "../components/Counter";

function Register(props) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("name")); // watch input value by passing the name of it
  watch((value, { name, type }) => console.log(value, name, type));
  return (
    <div>
      <br/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", {required: true})} type="text" name="name" id="name" placeholder={'name'}/>
        {errors.name && <small><br/>This field is required</small> }
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p>{message}</p>}
        />
        <br/><br/>
        <input type="email" name="" id="email" placeholder={'email'}/> <br/><br/>
        <input type="password" name="" id="password" placeholder={'password'}/> <br/><br/>
        <input type="submit" name="" id=""/>
      </form>
      <br/>
      <Counter />
    </div>
  );
}

export default Register;
