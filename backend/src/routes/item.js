 
const router = require('express').Router(); 


const {getTask, getByID, createTask, deleteTask, updateTask} = require('../controllers/itemController');

router.get('/', getTask);
router.post('/create', createTask);
router.get('/:taskID', getByID);
router.get('/delete/:taskID', deleteTask);
router.post('/update/:taskID', updateTask);

module.exports = router;
