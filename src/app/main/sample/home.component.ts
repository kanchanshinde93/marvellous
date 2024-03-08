import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import AOS from 'aos';
import { AdminServiceService } from 'app/Services/admin-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public marvellousForm: FormGroup
  public contentHeader: object
  submitted: boolean = false;
 bannerForm: any;
  constructor(private fb: FormBuilder, private adminService: AdminServiceService,private toastr:ToastrService) { }
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {

    this.marvellousForm = this.fb.group({
      fullName: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
    /*   plan: new FormControl("", [Validators.required]), */
    })

    AOS.init({
      offset: 200, // Offset (in px) from the original trigger point
      duration: "5s", // Duration of animation (in ms)
      easing: 'ease-in-out', // Easing type
      once: true
    });//AOS - 2
    AOS.refresh();

    this.contentHeader = {
      headerTitle: 'Home',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Sample',
            isLink: false
          }
        ]
      }
    }
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
