import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';



export class Todo {


  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date

  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

  message: string = ''
  todos: Todo[] = []
  visible: boolean = true;

  constructor(private todoDataService: TodoDataService, private router: Router, private route: ActivatedRoute, private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
    this.message = this.route.snapshot.queryParams['message']
    this.retrieveTodos();

    setTimeout(() => { this.visible = false; }, 3500); // 5000 milliseconds = 5 seconds }

  }

  addTodo() {
    this.router.navigate(['todo', -1]);
  }


  deleteTodo(id: number) {

    this.todoDataService.deleteTodoById(this.basicAuthenticationService.getUser(), id).subscribe(
      response => {
        this.retrieveTodos();
        this.message = `Delete of Todo ${id} successful!`;
      }
    )
  }

  updateTodo(id: number) {
    this.router.navigate(['todo', id]);

  }

  retrieveTodos(): void {
    this.todoDataService.retrieveAllTodos(this.basicAuthenticationService.getUser()).subscribe(

      response => {
        this.todos = response;
      });
  }


}
