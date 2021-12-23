const { response } = require('express');
const db = require('../db');


exports.getTask = async (req, res) => {
  try{
    db.query('SELECT * FROM item', (err, response) => {
      if (err) 
       console.log(err);
      if(response){
        res.json(response);
        console.log('this is the response', response);
      }
       
     res.end();
    });
  }catch(error){
      return res.json(error)

  }
   
}

 exports.createTask =  async (req, res) => {
  let title = req.body;
  try{
    db.query('INSERT INTO item set ?', [title], (err, response) => {
    res.redirect('/');
    if (err) 
       console.log(err);
      if(response)
        res.json(response);
     res.end();
    })} catch(error){
      return res.json(error)
    }

}; 


exports.getByID = async (req, res) => {
  let id = req.params.taskID;
  try{
    db.query('SELECT * FROM item WHERE id = ?',[id], (err, response) => {
      if (err) 
       console.log(err);
      if(response)
        res.json(response);
     res.end();
    });
  }catch(error){
    return res.json(error)
  }
};

exports.deleteTask = async (req, res) => {
  let id = req.params.taskID;
  try{
    db.query('DELETE FROM item WHERE id = ?', [id], (err, response) => {
      
      if (err) 
       console.log(err);
      if(response)
        res.json(response);
    });
  }catch(error){
    return res.json(error);
  }
};

exports.updateTask = (req, res) => {
  let id  = req.params.taskID;
  let title = req.body;
  try{
    db.query('UPDATE item set ? where id = ?', [title, id], (err, response) => {
      if (err) 
       console.log(err);
      if(response)
        res.json("Task was successfully update");
     res.end();
    });
  }catch(error){
    return res.json({error: "Task wasn't able to get updated"});
  }
  
  
};


