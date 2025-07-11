import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, User, onAuthStateChanged } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = getAuth();
  public user$ = new BehaviorSubject<User | null>(null);

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.user$.next(user);
    });
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const cred = await signInWithEmailAndPassword(this.auth, email, password);
      this.user$.next(cred.user);
      return cred.user;
    } catch (error) {
      throw error;
    }
  }

  async register(email: string, password: string): Promise<User> {
    try {
      const cred = await createUserWithEmailAndPassword(this.auth, email, password);
      this.user$.next(cred.user);
      return cred.user;
    } catch (error) {
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      this.user$.next(null);
    } catch (error) {
      throw error;
    }
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }
}
