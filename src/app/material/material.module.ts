import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

const MODULE = [MatToolbarModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatDividerModule, MatIconModule, MatListModule];

@NgModule({
  declarations: [],
  imports: [MODULE],
  exports: [MODULE],
})
export class MaterialModule { }
