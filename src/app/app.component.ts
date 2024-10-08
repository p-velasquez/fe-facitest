import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule para *ngIf
import { ExamFormComponent } from './exam-form/exam-form.component';
import { QuestionFormComponent } from './question-form/question-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  imports: [
    CommonModule,  // Importa CommonModule aquí
    ExamFormComponent,
    QuestionFormComponent
  ]
})
export class AppComponent {
  title = 'fe-proyecto';

  showExamForm: boolean = true;  // Controla si mostramos el formulario de examen
  showQuestionForm: boolean = false;  // Controla si mostramos el formulario de preguntas

  onExamSubmit() {
    console.log('Paso el submit')
    this.showExamForm = false;   // Oculta el formulario de examen
    this.showQuestionForm = true;  // Muestra el formulario de preguntas
  }

}
