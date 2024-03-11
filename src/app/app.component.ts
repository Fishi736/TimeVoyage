import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TimeVoyage';

  timeLine = [
    {
      "id": 1,
      "title": "The Renaissance Begins",
      "date": "14th Century",
      "description": "The Renaissance period marks the revival of art, culture, and learning in Europe, leading to significant advancements in science, art, and philosophy.",
      "image": "img1.webp",
      "video": "https://www.youtube.com/watch?v=1"
    },
    {
      "id": 2,
      "title": "Declaration of Independence",
      "date": "1776",
      "description": "The Declaration of Independence was adopted by the Continental Congress, declaring the 13 American colonies independent from British rule and laying the foundation for the United States.",
      "image": "img2.webp",
      "video": "https://www.youtube.com/watch?v=1"
    },
    {
      "id": 3,
      "title": "Lorem Epsumsa ",
      "date": "1832",
      "description": "The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.",
      "image": "img3.avif",
      "video": "https://www.youtube.com/watch?v=dYqtgpBg1ag"
    },
    {
      "id": 4,
      "title": "Fall of the Berlin Wall",
      "date": "1867",
      "description": "The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.",
      "image": "img4.jpg",
      "video": "https://www.youtube.com/watch?v=1"
    },

    {
      "id": 5,
      "title": "American Revolution",
      "date": "1920",
      "description": "TThe American Revolution was a rebellion and political revolution in the Thirteen Colonies, which saw colonists initiate a war for independence against the Kingdom of Great Britain.",
      "image": "img5.avif",
      "video": "https://www.youtube.com/watch?v=HlUiSBXQHCw"
    },
    {
      "id": 6,
      "title": "World War I",
      "date": "1999",
      "description": "World War I or the First World War was a global conflict fought between two coalitions: the Allies and the Central Powers.",
      "image": "img-6.avif",
      "video": "https://www.youtube.com/watch?v=G1p6rlDCxq0"
    },
    {
      "id": 7,
      "title": "Great Wall of china",
      "date": "1867",
      "description": "The fall of the Berlin Wall symbolized the end of the Cold War and the reunification of East and West Germany, marking a significant moment in modern history.",
      "image": "img4.jpg",
      "video": "https://www.youtube.com/watch?v=BUFLNJBj-KY"
    },


  ]
  searchTerm = '';
  searchYear: any;

  constructor(private elementRef: ElementRef) { }
  filteredTimelineData = this.timeLine;


  searchTimeline() {

    this.filteredTimelineData = this.timeLine.filter(event => {
      console.log(this.searchTerm, this.searchYear)
      let yearCondition = this.searchYear !== undefined
        ? parseInt(event.date, 10) === parseInt(this.searchYear)
        : true;

      let result = event.title.toLowerCase().includes(this.searchTerm.trim().toLowerCase()) && yearCondition;
      return result;
    });

  }

  reset() {
    this.filteredTimelineData = this.timeLine;
    this.searchTerm = '';
    this.searchYear = ''
  }





}
