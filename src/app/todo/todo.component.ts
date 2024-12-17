import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  id!: number;
  todo!: Todo;
  message!:String;
  username!:string
  
  constructor(private route: ActivatedRoute, private todoDataService: TodoDataService, private router:Router ,private hardcodedAuthenticationService :HardcodedAuthenticationService) { }
  ngOnInit(): void {
   this.username= this.hardcodedAuthenticationService.getUser();
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, "", false,new Date);
    if(this.id!=-1){
      this.todoDataService.getTodoById(this.username, this.id).subscribe(
        data => this.todo = data

      )
    
  }}



  onSubmit() {
    if(this.id==-1){
      this.todoDataService.saveTodo(this.username,this.todo.id,this.todo).subscribe(
        data=>{this.todo=data
          this.message=`Todo of id ${this.todo.id} added Successfully`
        this.router.navigate(['todos'],{ queryParams: { message: this.message } });
        }
      )
      
    }
    else{
    this.todoDataService.updateTodoById(this.username,this.todo.id,this.todo).subscribe(
      data=>{this.todo=data
        this.message=`Todo of id ${this.todo.id} updated Successfully`
      this.router.navigate(['todos'],{ queryParams: { message: this.message } });
      }
    )
    }
  }








}
