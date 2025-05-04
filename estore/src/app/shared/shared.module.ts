import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './components/ratings/ratings.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [RatingsComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports:[RatingsComponent]
})
export class SharedModule {}
