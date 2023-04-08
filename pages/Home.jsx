import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase/firebase.js'
import { collection, getDocs } from "firebase/firestore"
import { useDispatch, useSelector } from 'react-redux'
import { currentPerson, deletePerson } from '../redux/personSlice.js'


function Home() {
	//<redux>

	const dispatch = useDispatch()
	const person = useSelector((state)=>state.person.list)
    const collectionName = "crudImg"

    const getLinks = async () => {
		const querySnapshot = await getDocs(collection(db, collectionName));
		const docs = [];
		querySnapshot.forEach((doc) => {
		docs.push({ ...doc.data(), id: doc.id })
		});
		dispatch(currentPerson(docs));
	
    }
  const onDeleteLink = (id) => {
	dispatch(deletePerson(id))
	getLinks()


  }
	useEffect(()=>{
		getLinks()
	},[])


// 	// </redux>
   
    
  return (
    <div>
        <Link to="/Form">New</Link>
		<div className="nombre">
        	<h2>Registrados</h2>
			<table>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Foto</th>
						<th>Acciones</th>
					</tr>
				</thead>
				
				{person.map((val)=>{
					return(
				<tbody key={val.id}>			
					<tr>
						<td>
							<p>{val.name}</p>
						</td>
						<td>
							<img src={val.photo} alt={val.name} />
						</td>
						<td>
							<button
							 onClick={()=>onDeleteLink(val.id)}
							 >X</button>
							<Link to={`/Form/${val.id}`}>Edit</Link>

						</td>
					</tr>
				</tbody>			
							
					)
				})}
			</table>
        </div>
    </div>

  )
}

export default Home