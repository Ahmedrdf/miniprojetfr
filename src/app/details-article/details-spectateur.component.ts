import { Component, OnInit } from '@angular/core';
import { Spectateur } from '../spectateur';
import { SpectateurService } from '../spectateur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-spectateur',
  templateUrl: './details-spectateur.component.html',
  styleUrls: ['./details-spectateur.component.css']
})
export class DetailsSpectateurComponent implements OnInit {

  id: number;
 spectateur : Spectateur;

  constructor(private route: ActivatedRoute,private router: Router,
    private spectateurService: SpectateurService) { }

  ngOnInit() {
    this.spectateur= new Spectateur();

    this.id = this.route.snapshot.params['id'];
    
    this.spectateurService.getSpectateur(this.id)
      .subscribe(data => {
        console.log(data)
        this.spectateur = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['spectateur']);
  }
}