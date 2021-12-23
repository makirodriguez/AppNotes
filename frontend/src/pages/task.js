import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {getTask, postTask} from '../api/apiTask';
import Modal  from './Modal';
import styled  from 'styled-components';

const Task = () => {
  const [task, setTask] = useState([]);
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [datos, setDatos] = useState({
    title: ''
})
const [datos2, setDatos2] = useState({
  title: ''
})
  

   useEffect(() => {
    fetchTask();
  },[]) 


  const fetchTask = () => {
    getTask().then(json => {
      if (json.error) {
        console.log("error");
      } else {
          console.log(json.data)
          setTask(json.data);
      }
    })
  }
  const updateTask = (id) => {
    axios.post(`http://127.0.0.1:4000/update/${id}`,{
      title: datos2.title
  })}
  const handleInputChange = (e) => {
    setDatos({
        ...datos,
        [e.target.name] : e.target.value
    })
}
const handleInputChange2 = (e) => {
  setDatos2({
      ...datos2,
      [e.target.name] : e.target.value
  })
}
  const createTask = (event) => {
  axios.post(`http://127.0.0.1:4000/create/`, {
                  title: datos.title
  })}

  const deleteTask = (id) => {

    axios.get(`http://127.0.0.1:4000/delete/${id}`)
    window.location.reload();
  }


  const refreshPage =() =>{ 
    window.location.reload(); 
}

   return (
    <>
      <div className="container">
        <div className="row cards-cont">
          <div  class="container mt-4">
            <div class="col">
              <div class="row-md-5">
                <h1>To-do list</h1>
                <table class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <td>Done</td>
                      <td>Task</td>
                      <td>Actions</td>
                    </tr>
                  </thead>
                  <tbody>
                    { task && task.map((task, i) => (  
                      <tr>
                        <td><input type="checkbox" name="checkbox" /> </td>    
                        <td>{task.title}</td> 
                        <td>
                              <a class="btn btn-info" onClick={() => cambiarEstadoModal(!estadoModal)} >Edit</a>
                              <button  class="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>     
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div class="row-md-1">
                  <div class="card-body"></div>
                  <form onSubmit={createTask}>
                    <div class="input-group">
                      <input type="text" name="title" placeholder="New task" class="form-control" onChange={handleInputChange} />
                      <div class="input-group-append">
                        <button type="submit" class="btn btn-dark">
                          Add
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {task && task.map((task, i)=>(
                                  <Modal
                                  estado={estadoModal}
                                  cambiarEstado={cambiarEstadoModal}
                                  titulo="Edit task"
                                  mostrarHeader={true}
                                  mostrarOverlay={true}
                                  posicionModal={'center'}
                                  padding={'20px'}
                                  key={task.id}
                              >
                                  <Contenido>
                                  
                                  <div class="d-flex justify-content-between align-items-center mb-3">
                                      <div class="col-md">
                                          <label class="labels">Edit task {task.title}</label>
                                          <input key={task.id} className="form-control" 
                                          type="text" 
                                          placeholder={task.title}
                                          name="title" 
                                          onChange={handleInputChange2} />
                                      </div> 
                                  </div>  
                                  <div class="btn-group">
                                      <button class="btn btn-dark "  onClick={() => {cambiarEstadoModal(!estadoModal); updateTask(task.id); refreshPage()}}>Save</button>
                                      
                                      <button  class="btn btn-dark " onClick={() => {cambiarEstadoModal(!estadoModal); refreshPage()}}>Cancel</button>
                                   
                                  </div> 
                                      
                                      
                                  </Contenido>
                              </Modal>
                ))}


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Task;



const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;