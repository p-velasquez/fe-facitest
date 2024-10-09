import { Component } from '@angular/core';
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
  nameQuest: string = ''; // Pregunta ingresada por el usuario
  informationQuest: string = '';

  // Alternativas con un texto y si son correctas o no
  alternatives: { text: string, isCorrect: boolean }[] = [
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false }
  ];

  onSubmit() {
    console.log('Pregunta:', this.nameQuest);
    console.log('Información:', this.informationQuest);
    console.log('Alternativas:', this.alternatives);
  }
}
