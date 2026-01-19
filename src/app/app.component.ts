import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesService } from './services/notes.service';
import { Note } from './models/note.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notes: Note[] = [];
  noteTitle = '';
  noteText = '';

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.notes = this.notesService.getNotes();
  }

  addNote(): void {
    if (this.noteTitle.trim() || this.noteText.trim()) {
      this.notesService.addNote({
        title: this.noteTitle.trim(),
        text: this.noteText.trim()
      });
      this.noteTitle = '';
      this.noteText = '';
      this.loadNotes();
    }
  }

  deleteNote(id: string): void {
    this.notesService.deleteNote(id);
    this.loadNotes();
  }
}
