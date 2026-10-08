import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../Service/toast.service';
import { Toast } from '../../models/product.interface';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sv-toast-container" *ngIf="(toastService.toasts$ | async)?.length">
      <div
        *ngFor="let toast of toastService.toasts$ | async"
        class="sv-toast {{ toast.type }}"
      >
        <i [ngClass]="{
          'fa-solid fa-circle-check': toast.type === 'success',
          'fa-solid fa-circle-xmark': toast.type === 'error',
          'fa-solid fa-triangle-exclamation': toast.type === 'warning',
          'fa-solid fa-circle-info': toast.type === 'info'
        }"></i>
        <span>{{ toast.message }}</span>
        <button class="sv-toast__close" (click)="toastService.remove(toast.id)" aria-label="Close">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  `
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}
