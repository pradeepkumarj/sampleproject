import { Component, OnInit } from '@angular/core';
import { CategoryserviceService } from '../services/categoryservice.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-categoryproduct',
  templateUrl: './categoryproduct.component.html',
  styleUrls: ['./categoryproduct.component.css']
})
export class CategoryproductComponent implements OnInit {

  constructor(public categoryService: CategoryserviceService, public toastr: ToastrManager) { }

  type = 'categoryCreation'; // for differnetiating the displaying form.
  formSubmitted = false; // used for validating the form when submitted without entering the values in required fields
  categoryData = []; // storing categories in a global variable.
  productData = []; // storing products in a global variable.

  ngOnInit() {
    this.getCategory(); // function for getting categories
  }

  // function for getting categories from db
  getCategory() {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categoryData = data;
    }, err => {
      console.log(err)
    });
  }

  // function for getting products from db
  getProducts(id) {
    this.categoryService.getProducts(id).subscribe((data: any) => {
      this.productData = data;
    }, err => {
      console.log(err)
    });
  }

  /* adds  a category in db */
  addCategory(form) {
    this.formSubmitted = true;
    if (form.valid) {
      this.formSubmitted = false;
      /* calls category service for adding category in db */
      this.categoryService.addCategory(form.value).subscribe((data: any) => {
        this.toastr.successToastr('Category added successfully.', 'Success!');
        form.resetForm();
        this.getCategory(); // function for getting categories
      }, err => {
        console.log(err);
      })
    }
  }

  /* adds products for a category in db */
  addProduct(form) {
    this.formSubmitted = true;
    if (form.valid) {
      this.formSubmitted = false;
      /* calls category service for adding product in db */
      this.categoryService.addProduct(form.value).subscribe((data: any) => {
        this.toastr.successToastr('Product added successfully.', 'Success!');
        form.resetForm();
      }, err => {
        console.log(err);
      })
    }
  }

  /* deletes a category from db */
  deleteCategory(id) {
    alert("confirmation for deletion");
    /* calls category service for deleting category in db */
    this.categoryService.deleteCategory(id).subscribe((data: any) => {
      this.toastr.successToastr('Category and its associated products deleted successfully.', 'Success!');
      this.getCategory(); // function for getting Category
    }, err => {
      console.log(err);
    })
  }

  /**
   * @param event json
   * @output To accept only numbers
   */
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }


}
