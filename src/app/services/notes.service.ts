import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, onValue, remove, update, Database } from 'firebase/database';
import { environment } from '../../environments/environment';
import { Note } from '../models/note.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private db: Database;

  constructor() {
    const app = initializeApp(environment.firebase);
    this.db = getDatabase(app);
  }

  getNotes(): Observable<Note[]> {
    return new Observable(observer => {
      const notesRef = ref(this.db, 'notes');
      onValue(notesRef, (snapshot) => {
        const notes: Note[] = [];
        snapshot.forEach((childSnapshot) => {
          notes.push(childSnapshot.val());
        });
        notes.sort((a, b) => b.createdAt - a.createdAt);
        observer.next(notes);
      }, (error) => {
        observer.error(error);
      });
    });
  }

  addNote(note: Omit<Note, 'id' | 'createdAt'>): Promise<void> {
    const notesRef = ref(this.db, 'notes');
    const newNoteRef = push(notesRef);
    const newNote: Note = {
      ...note,
      id: newNoteRef.key!,
      createdAt: Date.now()
    };
    return set(newNoteRef, newNote);
  }

  updateNote(id: string, note: Partial<Note>): Promise<void> {
    const noteRef = ref(this.db, `notes/${id}`);
    return update(noteRef, note);
  }

  deleteNote(id: string): Promise<void> {
    const noteRef = ref(this.db, `notes/${id}`);
    return remove(noteRef);
  }
}
