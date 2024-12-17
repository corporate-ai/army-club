import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeDataService } from '../service/welcome-data.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ ],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name: string = '';
 


  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  
  }

}
