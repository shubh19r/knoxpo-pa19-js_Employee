const express = require('express')/* importing the module from library*/
const emps = require('./emp.model.js');
require ('./connection.js');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const port = 3000
app.use(bodyParser.json());
app.use('/',router);
app.get('/', (req, res) => res.send('Hello World'));
app.listen(3000, () => console.log(`Express server running on port 3000`));
/* add EMP*/
router.route('/emp/add').post((req, res) => {
    var emp = new emps(req.body);
    emp.save()
        .then(emp => {
            res.status(200).json({'Employee': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

/*View book by name*/
router.route('/emp/view/:id').get((req, res) => {
	var id = req.params.id;
	emps.findOne({_id:id}, (err, emps) => {
        if (err){
            res.json(err);
        }
        else
        	res.json(emps);
            
    });
});

/*get all the employee details*/
router.route('/emp').get((req, res) => {
    emps.find((err, emps) => {
        if (err)
            console.log(err);
        else
            res.json(emps);
    });
});

/* Update Employee by ID*/

router.route('/emp/update/:id').post((req, res) => {
    var id = req.params.id;
	emps.findOne({_id:id}, (err, emps) => {
        if (err){
            res.json(err);
        }
        else {
            emps.ID = req.body.ID;
            emps.NAME = req.body.NAME;
            emps.EMAIL = req.body.EMAIL;
            emps.Mob = req.body.Mob;
            emps.Title = req.body.Title;
            emps.save().then(emps => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});
/*delete employee by id*/
router.route('/emp/delete/:id').get((req, res) => {
	var id = req.params.id;
	emps.findOne({_id:id}, (err, emps) => {
        if (err){
            res.json(err);
        }
        else
        	emps.remove(function(err){
        		res.json('Removed successfully');
        	});
            
    });
});
