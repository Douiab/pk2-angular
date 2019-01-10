import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav-ad',
  templateUrl: './side-nav-ad.component.html',
  styleUrls: ['./side-nav-ad.component.css']
})
export class SideNavAdComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  ShowOperations() {
    this.router.navigate(['operations'], { relativeTo : this.route});
}
ShowDotations() {
    this.router.navigate(['dotations'], { relativeTo : this.route});
}
}
