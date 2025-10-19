import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   // 👈 Add this

interface Plan {
  name: string;
  price: number;
  duration: string;
  sms: string;
  tagline: string;
  highlight?: boolean;
  premium?: boolean;
}

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 include here
  templateUrl: './subscription.component.html',
})
export class SubscriptionComponent {
  plans: Plan[] = [
    { name: 'Minimum', price: 100, duration: '10 Days', sms: 'OFF', tagline: 'Essentials for Startups - Simple, Affordable, and Effective.' },
    { name: 'Regular', price: 300, duration: '15 Days', sms: 'OFF', tagline: 'Balanced and Optimized - Perfect for Growing Businesses.' },
    { name: 'Popular', price: 500, duration: '30 Days', sms: '415 Free SMS', tagline: 'The Smart Choice for Success! Our Most Popular Plan.', highlight: true },
    { name: 'Enterprise (Monthly)', price: 1000, duration: '30 Days', sms: '850 Free SMS', tagline: 'Premium Solution for Enterprises.' },
    { name: 'Enterprise (Yearly)', price: 5000, duration: '1 Year', sms: '5000 Free SMS', tagline: 'Best Value for Long-Term Growth.', premium: true },
  ];

  selectedPlan: Plan | null = null;
  smsEnabled = false;
  extraSms = 0;
  smsRate = 0.6;

  get total(): number {
    if (!this.selectedPlan) return 0;
    const base = this.selectedPlan.price;
    const smsCost = this.smsEnabled ? this.extraSms * this.smsRate : 0;
    return base + smsCost;
  }

  selectPlan(plan: Plan) {
    this.selectedPlan = plan;
    this.smsEnabled = false;
    this.extraSms = 0;
  }

  cancelSelection() {
    this.selectedPlan = null;
    this.smsEnabled = false;
    this.extraSms = 0;
  }
}
   