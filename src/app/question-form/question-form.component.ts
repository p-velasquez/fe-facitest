import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar *ngFor y *ngIf

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [
    CommonModule,  // Importa CommonModule aquí
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule
  ],
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.sass']
})
export class QuestionFormComponent {

  // Emitimos el objeto con la pregunta, información y alternativas
  @Output() QuestSubmit = new EventEmitter<{ nameQuest: string, informationQuest: string, alternatives: { text: string, isCorrect: boolean }[] }>();

  nameQuest: string = ''; // Pregunta ingresada por el usuario
  informationQuest: string = ''; // Información adicional de la pregunta

  // Alternativas con un texto y si son correctas o no
  alternatives: { text: string, isCorrect: boolean }[] = [
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false }
  ];

  // Método que emite el objeto al enviar el formulario
  onSubmit() {
    // Emitir el objeto con la pregunta, información y alternativas
    this.QuestSubmit.emit({
      nameQuest: this.nameQuest,
      informationQuest: this.informationQuest,
      alternatives: this.alternatives
    });

    // Limpiar los campos después de enviar
    this.clearForm();
    console.log("paso el submit")
  }

  // Método para limpiar el formulario
  clearForm() {
    this.nameQuest = '';
    this.informationQuest = '';
    this.alternatives = [
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
      { text: '', isCorrect: false }
    ];
  }
}
