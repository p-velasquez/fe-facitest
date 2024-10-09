import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exam-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.sass']
})
export class ExamListComponent {
  @Input() exams: { title: string, date: Date, asignature: string, subject: string }[] = [];
}
