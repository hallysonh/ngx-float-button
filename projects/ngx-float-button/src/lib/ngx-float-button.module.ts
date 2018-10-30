import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { NgxFloatButtonComponent } from './ngx-float-button.component';
import { NgxFloatItemButtonComponent } from './ngx-float-item-button.component';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [NgxFloatButtonComponent, NgxFloatItemButtonComponent],
  exports: [NgxFloatButtonComponent, NgxFloatItemButtonComponent]
})
export class NgxFloatButtonModule {}
