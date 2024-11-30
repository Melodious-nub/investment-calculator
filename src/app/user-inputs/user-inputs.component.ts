import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-inputs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-inputs.component.html',
  styleUrl: './user-inputs.component.css'
})
export class UserInputsComponent {
  initialInvestment: Number = 0;
  annualInvestment: Number = 0;
  expectedReturn: Number = 0;
  duration: Number = 0;

  @Output() passData = new EventEmitter();

  onPassData() {
    this.passData.emit({
      initialInvestment: +this.initialInvestment, annualInvestment: +this.annualInvestment, expectedReturn: +this.expectedReturn, duration: +this.duration
    })
  }
  
}
