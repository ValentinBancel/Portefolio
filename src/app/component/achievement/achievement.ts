import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-achievement',
    imports: [NgFor],
    templateUrl: './achievement.html'
})
export class AchievementComponent {
  @Input() achievement: any;
}
