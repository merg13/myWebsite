import { Component, OnInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  aboutMe:any = {
    cardTitle: 'About Me',
    cardDescription: 'About Me',
  };

  projects:any = {
    cardTitle: 'Projects',
    cardDescription: 'Projects',
  };

  education:any = {
    cardTitle: 'Education',
    cardDescription: 'Education',
  };

  professional:any = {
    cardTitle: 'Professional',
    cardDescription: 'Professional',
  };

  // aboutCard: ContentCardComponent = new ContentCardComponent(this.aboutMe);
  // projectsCard: ContentCardComponent = new ContentCardComponent(this.projects)
  // educationCard: ContentCardComponent = new ContentCardComponent(this.education)
  // professionalCard: ContentCardComponent = new ContentCardComponent(this.professional)

  // cards: ContentCardComponent[] = [this.aboutCard, this.projectsCard, this.educationCard, this.professionalCard]


}
