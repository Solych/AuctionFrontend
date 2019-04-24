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
  categories: any[];

  constructor(private router: ActivatedRoute) {
    this.categories = [
      {
        label: 'Auto',
        value: 1
      },
      {
        label: 'House',
        value: 2
      },
      {
        label: 'Books',
        value: 3
      }];
  }

  ngOnInit() {
    this.sub = this.router.queryParams.subscribe(params => {
      this.name = params.name;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
