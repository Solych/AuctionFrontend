import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.less']
})
export class ActionComponent implements OnInit {
  cols: any[];
  items: any[];

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.cols = [
      {field: 'picture', header: 'Picture'},
      {field: 'name', header: 'Name'},
      {field: 'price', header: 'Price'},
      {field: 'time', header: 'Time'}
    ];
    this.items = [
      {
        id: 1,
        picture: '1234',
        name: 'name',
        price: 34,
        time: '26.10.2020'
      },
      {
        id: 2,
        picture: '1234',
        name: 'name',
        price: 34,
        time: '26.10.2020'
      },
      {
        id: 3,
        picture: '1234',
        name: 'TV',
        price: 34,
        time: '26.10.2020'
      },
      {
        id: 4,
        picture: '1234',
        name: 'AUTO',
        price: 34,
        time: '26.10.2020'
      },
      {
        id: 5,
        picture: '1234',
        name: 'FLAT',
        price: 34,
        time: '26.10.2020'
      },
      {
        id: 6,
        picture: '1234',
        name: 'BRIDE',
        price: 34,
        time: '26.10.2020'
      }
    ];
  }

  click(id: number) {
    this.route.navigate([`thing/${id}`]);
  }

  goToLogin() {
    this.route.navigate(['login']);
  }
}
