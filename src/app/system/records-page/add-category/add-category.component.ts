import { Component, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'wfm-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {

  onCategoryAdd = new EventEmitter<Category>();

  constructor(private categoriesService: CategoriesService) {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    let {capacity} = form.value;
    if (capacity < 0) { capacity *= -1; }

    const category = new Category(name, capacity);

    this.categoriesService.addCategory(category)
      .subscribe(() => {
        console.log(category);
        form.reset();
        form.form.patchValue({capacity: 1});
        this.onCategoryAdd.emit(category);
      });

  }

}
