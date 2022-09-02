import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  taskObj: Task = new Task();
  taskArr : Task[] = [];
  addTaskValue : string = '';
  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }
  getAllTask(){
    this.crudService.getAllTask().subscribe(res =>{
      this.taskArr = res;
    }, err =>{
      alert("Unable to get list of tasks");
    });
  }
  addTask(etask : Task){
    this.crudService.addTask(etask).subscribe(res =>{
     this.ngOnInit();
    }, err => {
      alert(err);
    })
  }

  editTask(){
    this.crudService.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, err =>{
      alert("Failed to update task");
    })
  }

  deleteTask(etask : Task){
    this.crudService.deleteTask(etask).subscribe(res => {
     this.ngOnInit
    }, err =>{
      alert("Failed to delete task");
    })
  }
}
