import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private readonly STORAGE_KEY = 'notes';

  getNotes(): Note[] {
    const notesJson = localStorage.getItem(this.STORAGE_KEY);
    return notesJson ? JSON.parse(notesJson) : [];
  }

  addNote(note: Omit<Note, 'id' | 'createdAt'>): Note {
    const notes = this.getNotes();
    const newNote: Note = {
      ...note,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      createdAt: Date.now()
    };
    notes.unshift(newNote);
    this.saveNotes(notes);
    return newNote;
  }

  deleteNote(id: string): void {
    const notes = this.getNotes().filter(note => note.id !== id);
    this.saveNotes(notes);
  }

  private saveNotes(notes: Note[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(notes));
  }
}
