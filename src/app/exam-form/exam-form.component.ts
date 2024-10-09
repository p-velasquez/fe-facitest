import { Component, EventEmitter, Output } from '@angular/core';  // Importar EventEmitter y Output
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
  @Output() examSubmit = new EventEmitter<void>();  // Emitir evento cuando el formulario se envíe
  // estudiar este Output.

  testTitle: string = '';
  testDate: Date = new Date();
  ExamAsignature: string = '';
  asignatures: string[] = ['Matemáticas', 'Lenguaje', 'Ciencias', 'Historia'];
  newAsignature: string = '';
  showForm: boolean = false;
  examSubject: string = '';


  onSubmit() {
    console.log('Formulario de examen enviado');
    console.log('Título:', this.testTitle);
    console.log('Fecha:', this.testDate);
    console.log('Asignatura:', this.ExamAsignature);
    console.log('Tema:', this.examSubject);

    this.examSubmit.emit();  // Emitir el evento examSubmit cuando el formulario se envíe
  }

  onCreateAsignature(){
    this.showForm = true;
  }

  addAsignature() {
    if (this.newAsignature.trim()) {
      this.asignatures.push(this.newAsignature.trim());
      this.ExamAsignature = this.newAsignature;
      this.newAsignature = '';
      this.showForm = false;
        // Limpiar el campo de nueva asignatura
    }
  }
}
