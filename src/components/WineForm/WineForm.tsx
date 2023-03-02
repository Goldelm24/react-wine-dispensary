import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseBrand, chooseType, chooseOrigin, chooseYear } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface WineFormProps{
  id?: string;
  data?:{}
}

interface WineState{
  brand: string;
  type: string;
  origin: string;
  year: string;
}

export const WineForm =(props: WineFormProps) =>{

  const dispatch = useDispatch() //Updates Store
  const store = useStore();
  const brand = useSelector<WineState>(state => state.brand); // Extracts data from Redux
  const { register, handleSubmit } =useForm({ })

  const onSubmit = (data:any, event:any) => {
    console.log(props.id)
    // The ! is for strictly typed Typescript stuff
    // '!' means in not null or undefined
    if(props.id!){
        server_calls.update(props.id!, data);
        console.log(`Updated:${data} ${props.id}`);
        console.log(data);
        setTimeout( () => {window.location.reload()}, 1000);
        event.target.reset();
    } else {
        // Dispatch basically updates our state / Redux store 
        // Updates state with the values provided in the data
        dispatch(chooseBrand(data.brand));
        dispatch(chooseType(data.type));
        dispatch(chooseOrigin(data.origin));
        dispatch(chooseYear(data.year));
        server_calls.create(store.getState());
        setTimeout( () => {window.location.reload()}, 1000)
    }
}

  return (
    <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="brand">Brand Name</label>
                    <Input {...register('brand')} name="brand" placeholder='Brand'/>
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <Input {...register('type')} name="type" placeholder='Type'/>
                </div>
                <div>
                    <label htmlFor="origin">Origin</label>
                    <Input {...register('origin')} name="origin" placeholder='Origin'/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder='Year'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
  )
}
