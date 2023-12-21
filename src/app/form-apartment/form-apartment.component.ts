// form-appartment.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-appartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css'],
})
export class FormAppartmentComponent {
  apartForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.apartForm = this.fb.group({
      apartmentNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      floorNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      surface: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      terrace: ['No', Validators.required],
      surfaceTerrace: ['', Validators.pattern('^[0-9]*$')],
      category: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      residence: ['', Validators.required],
    });
  }

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.apartForm.value);
  }

  get f() {
    return this.apartForm.controls;
  }

  getApartmentNumberErrors() {
    return this.getControlErrors('apartmentNumber', {
      required: 'Apartment Number is required.',
      pattern: 'Only numbers are allowed.',
    });
  }

  getFloorNumberErrors() {
    return this.getControlErrors('floorNumber', {
      required: 'Floor Number is required.',
      pattern: 'Only numbers are allowed.',
    });
  }

  getSurfaceErrors() {
    return this.getControlErrors('surface', {
      required: 'Surface is required.',
      pattern: 'Only numbers are allowed.',
    });
  }

  getSurfaceTerraceErrors() {
    return this.getControlErrors('surfaceTerrace', {
      pattern: 'Only numbers are allowed.',
    });
  }

  getCategoryErrors() {
    return this.getControlErrors('category', {
      required: 'Category is required.',
    });
  }

  getDescriptionErrors() {
    return this.getControlErrors('description', {
      required: 'Description is required.',
      minlength: 'Description must be at least 10 characters.',
    });
  }

  getResidenceErrors() {
    return this.getControlErrors('residence', {
      required: 'Residence is required.',
    });
  }

  private getControlErrors(controlName: string, errorMessages: { [key: string]: string }): string[] {
    const errors: string[] = [];
    const control = this.apartForm.get(controlName);

    if (control?.errors) {
      Object.keys(control.errors).forEach((key) => {
        if (errorMessages[key]) {
          errors.push(errorMessages[key]);
        }
      });
    }

    return errors;
  }

  isResidenceReadOnly() {
    // Add your condition here
    return true; // Set to your actual condition
  }
}
