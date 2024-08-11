import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { ISignUp } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.scss',
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService, private router: Router) {}
  ngOnInit(): void {}
  signUp = (data: ISignUp) => {
    console.log({ data });
    this.seller.userSignUp(data).subscribe((result) => {
      if(result){
        this.router.navigate(['/']);
      }
    });
  };
}
