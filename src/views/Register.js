import React, {useEffect} from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import {Counter} from "../components/Counter";
import {minLength, positive} from '../utils/validator'

function Register(props) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("name")); // watch input value by passing the name of it
  watch((value, { name, type }) => console.log(value, name, type));

  useEffect(() => {
    console.log(errors)
  })
  return (
    <div>
      <br/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className={'border-1 rounded border-gray-500 p-2 bg-gray-100'} {...register("name", {required: {value: true, message: 'Name is required'}})} type="text" name="name" id="name" placeholder={'name'}/>
        {errors.name && <small><br/>{errors.name.message}</small> }
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p>{message}</p>}
        />
        <br/><br/>
        <input {...register("email", {validate: {positive: positive('name'), minLength: minLength('name', 5)}})} className={'border-1 rounded border-gray-500 p-2 bg-gray-100'} type="text" name="email" id="email" placeholder={'email'}/> <br/><br/>
        <input {...register("password", {required: true})} className={'border-1 rounded border-gray-500 p-2 bg-gray-100'} type="password" name="password" id="password" placeholder={'password'}/> <br/><br/>
        <input {...register("confirm_password", {required: true})} className={'border-1 rounded border-gray-500 p-2 bg-gray-100'} type="password" id="conform-password" placeholder={'confirm password'}/> <br/><br/>
        <input className={'border-1 rounded border-gray-500 p-2 bg-blue-400'} type="submit" name="" id=""/>
      </form>
      <br/>
      <Counter />
    </div>
  );
}

export default Register;
