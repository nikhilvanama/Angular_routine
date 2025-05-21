import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  task: string = "";
  taskList: { id: number, task: string }[] = [];

  Addtask() {
    this.taskList.push({ id: this.taskList.length + 1, task: this.task });
    console.log(this.taskList);
    this.task = "";
  }

  Deletetask(taskId: number) {
    this.taskList = this.taskList.filter(task => task.id != taskId);
  }
}
 