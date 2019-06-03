import {Component, OnInit} from '@angular/core';
import {Thing} from '../../shared/model/Thing';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../shared/shared.service';
import {ThingService} from '../../shared/thing.service';
import {Overrides} from '../../shared/model/Overrides';
import {Subscription} from 'rxjs';
import {HelperService} from '../../shared/helper.service';
import {betsNotFound, itsYourOwnLot, needsAuthorization, severityError, severityInfo, tooLowBet} from '../../constants/Constants';

@Component({
  selector: 'app-thing-detail',
  templateUrl: './thing-detail.component.html',
  styleUrls: ['./thing-detail.component.less']
})
export class ThingDetailComponent implements OnInit {
  thingId: number;
  thing: Thing;
  newThingPrice: number;
  overrides: Overrides[];
  display = false;
  routeSubscription: Subscription;
  constructor(private router: Router, private sharedService: SharedService, private thingService: ThingService,
              private route: ActivatedRoute, private helperService: HelperService) {
    this.routeSubscription = route.params.subscribe(params => {
      this.thingId = params['id'];
      this.getThingById();
    });
  }

  ngOnInit() {
  }

  showModal() {
    this.thingService.getOverrides(this.thing.thingId).subscribe((data: Overrides[]) => {
      this.overrides = data;
      if (this.overrides.length === 0) {
        this.helperService.showMsg(severityInfo, betsNotFound);
        return;
      }
      this.sortByPrice();
      this.display = true;
    });
  }

  updateThing() {
    if (!this.helperService.isLogged()) {
      this.helperService.showMsg(severityError, needsAuthorization);
      return;
    }
    if (this.isYourOwnLot()) {
      this.helperService.showMsg(severityError, itsYourOwnLot);
      return;
    }
    this.thingService.getThingById(this.thing.thingId).subscribe((data: Thing) => {
      if (this.newThingPrice <= data.minPrice) {
        this.helperService.showMsg(severityError, tooLowBet);
        this.thing.minPrice = data.minPrice;
        return;
      }
      //this.thingService.update(thing);
    });
  }

  goToAddThing() {
    this.router.navigate(['new']);
  }

  private getThingById() {
    this.thingService.getThingById(this.thingId).subscribe((data: Thing) => {
      this.thing = data;
      this.newThingPrice = this.thing.minPrice + 1;
    });
  }

  private sortByPrice() {
    this.overrides.sort(function (overrideFirst, overrideSecond) {
      return overrideFirst.price < overrideSecond.price ? 1 : -1;
    });
  }

  private isYourOwnLot() {
    return this.helperService.getOwnerIdFromStorage() === this.thing.owner.buyerId;
  }
}
