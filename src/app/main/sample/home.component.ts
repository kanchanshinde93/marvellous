import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public marvellousForm :FormGroup
  public contentHeader: object
  submitted: boolean=false;
  constructor(private fb: FormBuilder) {}
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {

    this.marvellousForm = this.fb.group({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      phonenumber: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      message: new FormControl("", [Validators.required]),
    })
    
    AOS.init( {offset: 200, // Offset (in px) from the original trigger point
    duration: "5s", // Duration of animation (in ms)
    easing: 'ease-in-out', // Easing type
    once: true});//AOS - 2
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

  marvellousSubmit(){
    this.submitted = true;
    if (this.marvellousForm.invalid) {
      return;
    } else {
      this.marvellousForm.reset()
       this.submitted = false;
      /* let body={
      fullName: this.marvellousForm.value.name ,
      phone: this.marvellousForm.value.pNumber ,
     city: this.marvellousForm.value.citys ,
     
        }
        console.log(body); */
        /*  this.adminService.contactForm(body).subscribe((data: any) => {
          console.log(data)
          if(data.status){
            this.toastr.success(data.message,"Success!");
            this.bannerForm.reset()
            this.submittedb = false;
           
          }else{
            this.toastr.error(data.message,"error!")
            
          }
          
        });   */
    }
  }
}
