import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminServiceService } from 'app/Services/admin-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public marvellousForm: FormGroup
  public contentHeader: object
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private adminService: AdminServiceService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  
  get b() {
    return this.marvellousForm.controls;
  }
  marvellousSubmit() {
    this.submitted = true;
    if (this.marvellousForm.invalid) {
      return;
    } else {
      
      let body = {
        fullName: this.marvellousForm.value.fullName,
        phone: this.marvellousForm.value.phone,
        state: this.marvellousForm.value.state,
        plan: 'Advance',

      }
      console.log(body);
      this.adminService.contactForm(body).subscribe((data: any) => {
        console.log(data)
        if (data.status) {
          this.toastr.success(data.message, "Success!");
          this.marvellousForm.reset()
          this.submitted = false;

        } else {
          this.toastr.error(data.message, "error!")

        }

      });
    }
  }

}
