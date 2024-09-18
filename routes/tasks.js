var express = require('express');
var tasks = express.Router();
var Task = require('../models/taskModel.js');

tasks.route('/')
    .get(async (req, res) => {
        const tasks = await Task.find();
        if (tasks) res.status(200).json(tasks)
        else return res.status(500)
    })
    .post(async (req, res) => {
        const task = new Task({
            fields : {
              title: req.query.title,
              status: req.query.status,
              description: req.query.description
            },
            id: req.query.id
        });
        if (task) await task.save(task)
        else return res.status((500))
    })

    tasks.route('/:id')
    .get(async (req, res) => {
        const task = await Task.findOne(req.params);
        return res.status(200).json(task)
    })
    .put(async (req, res) => {
      try {
          const updatedFields = { 
            title: req.query.title,
            status: req.query.status,
            description: req.query.description
          };

          const updatedTask = await Task.findOneAndUpdate({ id: req.params.id }, { fields: updatedFields });

          if (!updatedTask) {
              return res.status(404).json({ error: "Task not found" });
          }

          return res.status(200).json({ message: "Task updated successfully" });
      } catch (error) {
          return res.status(500).json({ error: "Internal server error" });
      }
  })
  .delete(async (req, res) => {
      try {
        console.log(req.params.id)
        const task = Task.findOne({id: req.params});

        if(!task) {
          return res.status(404).json({ err: "Task not found" });
        }
        await Task.deleteOne({id: req.params.id});
        return res.status(200).json({ message: "Task deleted successfully" });
      } catch (error) {
          return res.status(500).json({ error: "Internal server error" });
      }
        
  })

module.exports = tasks;
