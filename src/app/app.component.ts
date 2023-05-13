import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './store';
import * as fromDictionaries from './store/dictionaries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arch';

  constructor(private store: Store<fromRoot.State>) {

  }

  ngOnInit() {
    this.store.dispatch(new fromDictionaries.Read());
  }
}
