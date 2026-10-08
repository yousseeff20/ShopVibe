import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../Service/toast.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: 'Order Inquiry',
    message: ''
  };

  submitted: boolean = false;

  constructor(private toastService: ToastService) {}

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.toastService.error('Please fill in your name, email, and message.');
      return;
    }
    this.submitted = true;
    this.toastService.success('Thank you! Your message has been sent to our Cairo support team.');
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: 'Order Inquiry',
      message: ''
    };
  }
}
