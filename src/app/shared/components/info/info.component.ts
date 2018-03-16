import { Observable } from 'rxjs/Observable';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent implements OnInit {
  infoMsg = `Each group will be created as a button.

  DisplayName should match with member name on Bitbucket.

  If you are on the PR that you created, it will add all member except for you.

  If you are on the PR that others created, it will add all members as you need to clear that specific user.

  The reset button will clear all members.

  Only works when members are on Recent.

  You can see buttons on new & edit PR pages.`;

  showInfoIcon$: Observable<boolean>;

  constructor(
    private router: Router,
    private sharedService: SharedService) {
    this.showInfoIcon$ = sharedService.showInfoIcon.asObservable();
  }

  ngOnInit() {
  }
}
