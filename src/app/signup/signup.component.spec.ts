import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { UserService } from '../services/user/user.service';
import { SignupComponent } from './signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';

// let mockUser = [
//   {
//     firstName: 'Sidney',
//     lastName: 'Avila',
//     userName: 'savila12',
//     emailAddress: 'savila1212@gmail.com',
//     password: '123456'
//   }
// ];


fdescribe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit( 'should create a new user, ', () => {
    const form = fixture.debugElement.query(By.css('form'));
    fixture.detectChanges();
    expect(form).toBe(null);
  });
});
