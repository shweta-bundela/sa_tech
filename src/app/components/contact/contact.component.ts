import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  makeCall(): void {
    window.location.href = 'tel:+1234567890';  // Replace with your contact number
  }

  sendEmail(): void {
    window.location.href = 'mailto:contact@satechnology.com';  // Replace with your email address
  }

  startChat(): void {
    // You can link to a chat service like WhatsApp, Messenger, etc.
    window.location.href = 'https://wa.me/1234567890';  // Replace with your WhatsApp number
  }

}
