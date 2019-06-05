import { Component, OnInit } from '@angular/core';
import {HelperService} from '../../shared/helper.service';
import {ThingService} from '../../shared/thing.service';
import {Thing} from '../../shared/model/Thing';
import {CountCategory} from '../../shared/model/CountCategory';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {
  lots: Thing[];
  countsCategory: any;
  colors: string[];
  constructor(private helperService: HelperService, private thingService: ThingService) {
    this.initializeColors();
  }

  ngOnInit() {
    this.thingService.getThingsByOwner(this.helperService.getOwnerIdFromStorage()).subscribe((data: Thing[]) => {
      this.lots = data;
    });
    this.thingService.getDataOfCategories(this.helperService.getOwnerIdFromStorage()).subscribe((data: CountCategory[]) => {
      this.countsCategory = this.modifyDataToChart(data);
    });
  }

  private initializeColors() {
    this.colors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c',
      '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075',
      '#808080', '#ffffff', '#000000'];
  }

  private modifyDataToChart(data: CountCategory[]) {
    return {
      datasets: [{
        data: _.map(data, 'counts'),
        backgroundColor: this.colors.slice(0, data.length),
        label: 'График выставленных лотов и категорий'
      }],
        labels: _.map(data, 'cname')
    }
  }

  private countOverridesByMonths() {

  }

}
