import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamFormComponent } from './exam-form/exam-form.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { ExamListComponent } from './exam-list/exam-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  imports: [
    CommonModule,
    ExamFormComponent,
    QuestionFormComponent,
    ExamListComponent
  ]
})
export class AppComponent {
  title = 'fe-proyecto';

  // Asignamos valores para poder mostrar el formulario de prueba y esconder el de preguntas.
  showExamForm: boolean = true;
  showQuestionForm: boolean = false;

  // Lista de pruebas creadas arrays de objetos tipo examenes.
  savedExams: { title: string, date: Date, asignature: string, subject: string }[] = [];

  // Recibe la prueba creada desde el ExamFormComponent
  onExamSubmit(newExam: { title: string, date: Date, asignature: string, subject: string }) {
    console.log('Nueva prueba recibida:', newExam);

    // Agregar la nueva prueba al array savedExams
    this.savedExams.push(newExam);

    // Mostrar el formulario de preguntas
    this.showExamForm = false;
    this.showQuestionForm = true;
  }
}
