import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-exam-form',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule
  ],
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.sass']
})
export class ExamFormComponent {

  @Output() examSubmit = new EventEmitter<{ title: string, date: Date, asignature: string, subject: string }>();

  testTitle: string = '';
  testDate: Date = new Date();
  ExamAsignature: string = '';
  examSubject: string = '';
  asignatures: string[] = ['Matemáticas', 'Lenguaje', 'Ciencias', 'Historia'];
  newAsignature: string = '';
  showForm: boolean = false;

  // Nueva lista para almacenar las pruebas creadas
  savedExams: { title: string, date: Date, asignature: string, subject: string }[] = [];

  onSubmit() {
    // Emitir la nueva prueba al componente padre (AppComponent)
    this.examSubmit.emit({
      title: this.testTitle,
      date: this.testDate,
      asignature: this.ExamAsignature,
      subject: this.examSubject
    });

    // Limpiar los campos después de enviar
    this.clearForm();
  }
  onCreateAsignature() {
    this.showForm = true;
  }

  addAsignature() {
    if (this.newAsignature.trim()) {
      this.asignatures.push(this.newAsignature.trim());
      this.ExamAsignature = this.newAsignature;
      this.newAsignature = '';
      this.showForm = false;
    }
  }

  clearForm() {
    this.testTitle = '';
    this.ExamAsignature = '';
    this.examSubject = '';
  }
}
