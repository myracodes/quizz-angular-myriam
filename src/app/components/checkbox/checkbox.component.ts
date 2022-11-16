import { Component, Input } from '@angular/core';
import { ICheckbox } from 'src/app/shared/models/checkbox';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Input()
  option!: ICheckbox;

}
