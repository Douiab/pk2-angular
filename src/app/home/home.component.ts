import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {}
    ShowOperations() {
        this.router.navigate(['operations'], { relativeTo : this.route});
    }
    ShowDotations() {
        this.router.navigate(['dotations'], { relativeTo : this.route});
    }
}
