import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '',
    loadComponent: () => import('./pages/resume/resume.component').then(m => m.ResumeComponent)
    }   
];
