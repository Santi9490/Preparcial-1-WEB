"use client";
import React from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { resolve } from "path";

const schema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters long" }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters long" }),
    displayName: z.string().min(2, { message: "Display name must be at least 2 characters long" }),
    username: z.string().min(2, { message: "Username must be at least 2 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    avatarUrl: z.string().url({ message: "Invalid URL" }).optional(),
    country: z.string().min(2, { message: "Country must be at least 2 characters long" }),
    city: z.string().min(2, { message: "City must be at least 2 characters long" }),
    bio: z.string().min(10, { message: "Bio must be at least 10 characters long" }).optional(),
});
type FormFields = z.infer<typeof schema>;

export const AuthorForm = () => {
    const {register} = useForm<FormFields>({
        defaultValues: {
            firstName: '',
            lastName: '',
            displayName: ''},
        resolver: zodResolver(schema)
    
    })
    const onSubmit : SubmitHandler<FormFields> = data => console.log(data);
    return (
        <div>
            <h1>Author Form</h1>
            <form className='flex flex-col gap-4'></form>
                <input type="text" placeholder='First Name' {...register('firstName')} />
                <input type="text" placeholder='Last Name' {...register('lastName')} />
        </div>
    );;

   
}