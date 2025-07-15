import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService) { }

  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(data => console.log(data));
    this.formGroup = this.formBuilder.group({
      hour: [''],
      showClosed: false
    })
  }
  onSubmit(): void{
    console.log(this.formGroup.value)
  }
  onClean(): void{
    this.formGroup.reset()
  }
}
