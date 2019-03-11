import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/index";
import {ActivatedRoute} from "@angular/router";
import {ThingService} from "../../shared/thing.service";
import {Thing} from "../../shared/model/Thing";

@Component({
  selector: 'app-thing-detail',
  templateUrl: './thing-detail.component.html',
  styleUrls: ['./thing-detail.component.less']
})
export class ThingDetailComponent implements OnInit {
  private subscription: Subscription;
  private id: number;
  private thing: Thing;
  constructor(private activatedRoute: ActivatedRoute, private thingService: ThingService) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.loadThingData();
    });
  }

  private loadThingData() {
    this.thingService.getThingById(this.id).subscribe(data => {
      this.thing = data;
    });
  }

}
