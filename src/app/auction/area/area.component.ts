import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.less']
})
export class AreaComponent implements OnInit, OnDestroy {
  sub: Subscription;
  name: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.router.queryParams.subscribe(params => {
      this.name = params.name;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
