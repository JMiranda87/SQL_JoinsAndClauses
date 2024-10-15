import { Component } from "@angular/core";
import { Todo } from "./todo.model";

@Component({
    selector: "ns-todo",
    templateUrl: "./todo.component.html",
    styleUrls: ["./todo.component.css"],
})
export class TodoComponent {
    todos: Todo[] = [];
    newTodoText = "";

    addTodo() {
        if (this.newTodoText.trim()) {
            const newTodo: Todo = {
                id: Date.now(),
                text: this.newTodoText.trim(),
                completed: false,
            };
            this.todos.push(newTodo);
            this.newTodoText = "";
        }
    }

    toggleTodo(todo: Todo) {
        todo.completed = !todo.completed;
    }

    deleteTodo(todo: Todo) {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
    }
}