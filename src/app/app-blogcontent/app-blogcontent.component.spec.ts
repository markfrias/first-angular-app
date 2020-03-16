import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlogcontentComponent } from './app-blogcontent.component';

describe('AppBlogcontentComponent', () => {
  let component: AppBlogcontentComponent;
  let fixture: ComponentFixture<AppBlogcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBlogcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBlogcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
