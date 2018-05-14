import { Routes } from '@angular/router'

import { PreviewComponent } from './preview/preview.component';
import { EditComponent } from './edit/edit.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'preview', component: PreviewComponent},
    {path: 'edit', component: EditComponent},
    {path: 'entry', component: EditComponent}
];