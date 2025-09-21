'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import z, { set } from 'zod'
import { Author } from '../../model/Author.interface';

  const schema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.email(),
  country: z.string(),
  birth_year: z.number().min(4),
  is_alive: z.boolean()
})

type FormFields = z.infer<typeof schema>


export const AuthorForm = () => {

  const {register, handleSubmit,setError, formState: {errors, isSubmitting}} = useForm<FormFields>(
    {defaultValues: {
      first_name: 'Juan',
      last_name: 'Pedro',
      email: 'test@test.com',
      country: 'Colombia',
      birth_year: 1990,
      is_alive: true
    },
    resolver: zodResolver(schema)
  }

  )

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log(data);
        const response = await fetch('/api/authors', {method: 'POST', body: JSON.stringify(data) })
        if(!response.ok) throw new Error();
        else{
          const author = await response.json()
          console.log(author);
        }
      } catch (error) {
        
        setError("first_name", {message: 'Error en el nombre'})
        setError("last_name", {message: 'Error en el apellido'})
        setError("email", {message: 'Email ya existe'})
        setError("country", {message: 'Error en el país'})
        setError("birth_year", {message: 'Error en el año de nacimiento'})
        setError("is_alive", {message: 'Error en si está vivo'})
        setError("root", {message: 'Error del servidor'})
      }
  }


  return (
    <div>
      <h1>Author Form</h1>
      <form className="w-2/3 p-5 flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)} >
      <label> First Name </label>
      <input 
          {...register('first_name', {required: "Campo requerido"})}
          type="text"
          placeholder="First Name"
          className="border border-white p-2"
      />
      {errors.first_name && <span className="text-red-500">{errors.first_name.message}</span>}
      <label> Last Name </label>
      <input 
          {...register('last_name', {required: "Campo requerido"})}
          type="text"
          placeholder="Last Name"
          className="border border-white p-2"
      />
      {errors.last_name && <span className='text-red-500'>{errors.last_name.message}</span>}
      <label> Email </label>
      <input 
          {...register('email', {required: "Campo requerido"})}
          type="text"
          placeholder="Email"
          className="border border-white p-2"
          />
        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
      <label> Country </label>
      <input 
          {...register('country', {required: "Campo requerido"})}
          type="text"
          placeholder="Country"
          className="border border-white p-2"
      />
      {errors.country && <span className='text-red-500'>{errors.country.message}</span>}
      <label>
        Birth Year
      </label>
      <input 
          {...register('birth_year', {required: "Campo requerido"})}
          type="number"
          placeholder="Birth Year"
          className="border border-white p-2"
      />
      {errors.birth_year && <span className='text-red-500'>{errors.birth_year.message}</span>}
      <label>
        Is Alive
      </label>
      <input 
          {...register('is_alive', {required: "Campo requerido"})}
          type="checkbox"
          className="border border-white p-2"
      />
      {errors.is_alive && <span className='text-red-500'>{errors.is_alive.message}</span>}
          

          <button disabled={isSubmitting} type="submit"> 
          {
            isSubmitting ? 'Cargando': 'Crear'
          }  
          </button>

          {errors.root && <span className='text-red-500'>{errors.root.message}</span>}          

    </form>


    </div>
  )
}
