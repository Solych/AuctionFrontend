import { Component, OnInit } from '@angular/core';
import {HelperService} from '../../shared/helper.service';
import {ThingService} from '../../shared/thing.service';
import {Thing} from '../../shared/model/Thing';
import {CountCategory} from '../../shared/model/CountCategory';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {
  lots: Thing[];
  countsCategory: any;
  constructor(private helperService: HelperService, private thingService: ThingService) {
  }

  ngOnInit() {
    this.thingService.getThingsByOwner(this.helperService.getOwnerIdFromStorage()).subscribe((data: Thing[]) => {
      this.lots = data;
    });
    this.thingService.getDataOfCategories(this.helperService.getOwnerIdFromStorage()).subscribe((data: CountCategory[]) => {
      this.countsCategory = this.modifyDataToChart(data);
    });
  }

  private modifyDataToChart(data: CountCategory[]) {

  }

}
