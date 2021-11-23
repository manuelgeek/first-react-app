import React, {useEffect} from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import {Counter} from "../components/Counter";
import {confirmPassword, emailFormat, required, minLength} from '../utils/validator'

function Register(props) {

  const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm();
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
        {errors.name && <small className={'text-red-500'}><br/>{errors.name.message}</small> }
        <br/><br/>
        <input {...register("email", {validate: {required: required('email'), email: emailFormat()}})} className={'border-1 rounded border-gray-500 p-2 bg-gray-100'} type="text" name="email" id="email" placeholder={'email'}/>
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <small className={'text-red-500'}><br/>{message}</small>}
        />
        <br/><br/>

        <input {...register("password", {validate: {required: required('password'), min: minLength('password', 6), confirm: confirmPassword('password', getValues('password'))}})} className={'border-2 rounded border-gray-500 p-2 bg-gray-100 ' + errors.password ? 'bg-red-100' : ''} type="password" name="password" id="password" placeholder={'password'}/>
        {errors.password && <small className={'text-red-500'}><br/>{errors.password.message}</small> }
        <br/><br/>

        <input {...register("confirm_password", {required: true})} className={'border-1 rounded border-gray-500 p-2 bg-gray-100'} type="password" id="conform-password" placeholder={'confirm password'}/>
        <br/><br/>

        <input className={'border-1 rounded border-gray-500 p-2 bg-blue-400'} type="submit" name="" id=""/>
      </form>
      <br/>
      <Counter />
    </div>
  );
}

export default Register;
