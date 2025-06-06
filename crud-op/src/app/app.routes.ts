import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './features/post/pages/create-post/create-post.component';

export const routes: Routes = [
    { path: '', component: AppComponent },         // Default route
    { path: 'createpost', component: CreatePostComponent }, 
    { path: '**', redirectTo: '' }  // Wildcard route to handle 404
];
