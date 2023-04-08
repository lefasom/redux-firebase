import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addPerson } from '../redux/personSlice.js';
import { useDispatch } from 'react-redux'
import { uploadFile } from '../firebase/firebase.js'

function Form() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [name, setName ] = useState('')
	const [photo, setPhoto ] = useState('')

	const handleSubmit = async () => {
		dispatch(addPerson({ name, photo }))
			 navigate('/')
	}

  return (
	<div className="containerpro">
		<div className="miName">
			<input type="file" name="" id="" onChange={async(e)=>{
				const result = await uploadFile(e.target.files[0])
				setPhoto(result)
			}}/>
			<h4>Mi Nombre</h4>
			<input name='name' type="text" onChange={(e)=>setName(e.target.value)}/>
			<h4>Mi Foto</h4>
			<button 
			onClick={
				()=>{handleSubmit()}}
			>
				Registrar
			</button>
		</div>
	</div>
  )
}

export default Form