import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CategoryService} from '../../shared/category.service';
import {ThingService} from '../../shared/thing.service';
import {HelperService} from '../../shared/helper.service';
import {severityError} from '../../constants/Constants';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.less']
})
export class AreaComponent implements OnInit, OnDestroy {
  sub: Subscription;
  name: string;
  categories: any[];
  selectedCategory: number;

  constructor(private router: ActivatedRoute, private thingService: ThingService, private helperService: HelperService) {
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

  changeCategory() {
    this.thingService.getThingsByCategories(this.selectedCategory).subscribe(data => {

    }, error => {
      this.helperService.showMsg(severityError, error.error.message);
    });
  }

}
