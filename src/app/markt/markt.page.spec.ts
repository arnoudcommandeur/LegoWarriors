import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarktPage } from './markt.page';

describe('MarktPage', () => {
  let component: MarktPage;
  let fixture: ComponentFixture<MarktPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarktPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarktPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
