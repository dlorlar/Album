import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'greatest';
  name = 'Tosin Omotayo';
  show = 'ball -show';
  academy = [
    {name: "Tosin", image: 'small.jpg', complexion: 'black',hobbies: ['football', 'suit']},
    {name: "Zino",  image:'small.jpg',complexion: 'black',hobbies: ['football', 'suit']},
    {name: "Sarah",  image: 'small.jpg',complexion:'light',hobbies: ['football', 'suit']},
    {name: "Najeeb",  image:'small.jpg',complexion:'light',hobbies: ['football', 'suit']},
    {name: "Charles",  image:'small.jpg',complexion:'black',hobbies: ['football', 'suit']}
   
  ];
}