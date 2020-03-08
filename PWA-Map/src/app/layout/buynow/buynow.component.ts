import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.sass']
})
export class BuynowComponent implements OnInit {

  isLoading = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openLoading(){
    const self = this;
    this.isLoading = true;

    Swal.fire({
      title: '購買中!',
      text: '正在購買...',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    })
    .then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {

        Swal.fire({
          title: '購買成功',
          icon: 'success',
        })
        .then(() => {
          self.isLoading = false;
          self.router.navigate(['/map']);
        })
      }
    })
  }
}
