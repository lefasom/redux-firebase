import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams, Link} from 'react-router-dom'
import { updatePerson } from '../redux/personSlice'
import { collection, deleteDoc, getDoc, getDocs, addDoc, doc } from "firebase/firestore";
import { db } from '../firebase/firebase';

function FormId(){
const collectionName = "crudImg"
    const [ name, setName ] = useState('')
    const [ photo, setPhoto ] = useState('')

    const { id } = useParams()
	const navigate = useNavigate()
	const dispatch = useDispatch()
      const getData = async() =>{
        const dta = await getDoc(doc(db, collectionName, id))
        const photo  = dta.data().photo
        const name  = dta.data().name
		setName(name)
		setPhoto(photo)

    }




	const handleSubmit = () => {
		dispatch(updatePerson({ photo, name, id }))
			 navigate('/')
	}
  
    useEffect(()=>{
        getData()
        
    },[])
   
  return (
	<div className="containerpro">
		<div className="miName">
			<img src={photo} alt={name} />
			<h4>Mi Nombre</h4>
			<input value={name} type="text" onChange={(e)=>setName(e.target.value)}/>
			<button 
			onClick={()=>{handleSubmit()}}
			>
				Guardar cambios
			</button>
			<Link to={`/`}>Cancelar</Link>

		</div>
	</div>
  )
}


export default FormId