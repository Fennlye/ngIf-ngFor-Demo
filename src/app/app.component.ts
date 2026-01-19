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
  editingNoteId: string | null = null;
  isLoading = false;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.isLoading = true;
    this.notesService.getNotes().subscribe({
      next: (notes) => {
        this.notes = notes;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  addNote(): void {
    if (this.noteTitle.trim() || this.noteText.trim()) {
      if (this.editingNoteId) {
        this.notesService.updateNote(this.editingNoteId, {
          title: this.noteTitle.trim(),
          text: this.noteText.trim()
        }).then(() => {
          this.resetForm();
        });
      } else {
        this.notesService.addNote({
          title: this.noteTitle.trim(),
          text: this.noteText.trim()
        }).then(() => {
          this.resetForm();
        });
      }
    }
  }

  editNote(note: Note): void {
    this.noteTitle = note.title;
    this.noteText = note.text;
    this.editingNoteId = note.id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cancelEdit(): void {
    this.resetForm();
  }

  deleteNote(id: string): void {
    this.notesService.deleteNote(id);
  }

  private resetForm(): void {
    this.noteTitle = '';
    this.noteText = '';
    this.editingNoteId = null;
  }
}
