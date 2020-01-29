import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAlbumComponent } from './app-album.component';

describe('AppAlbumComponent', () => {
  let component: AppAlbumComponent;
  let fixture: ComponentFixture<AppAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
