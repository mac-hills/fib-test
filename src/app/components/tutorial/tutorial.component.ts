import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { clockColors } from 'src/app/resources/color-resources/clockColors';
import { ColorPickerService } from 'ngx-color-picker';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {
  clockColors = clockColors;

  constructor(
    private colorService: ColorService,
    private colorPickerService: ColorPickerService,
    private router: Router
  ) { }

  launchColorPicker(colorKey: string): void {
    const inputElement = document.createElement('input');
    inputElement.type = 'color';
    inputElement.value = this.colorService.getClockColors()[colorKey];

    // Handle color selection
    inputElement.addEventListener('input', (event) => {
      const colorSelected = (event.target as HTMLInputElement).value;
      this.colorService.updateColor(colorKey, colorSelected);
    });

    inputElement.click();
  }

  backToClock() {
    this.router.navigate(['/clock']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }
}
