import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

  CreatePostForm = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl<string>('', [Validators.required, Validators.minLength(10)]),
    image: new FormControl('', [Validators.required]),
  });

  get title() {
    return this.CreatePostForm.controls.title;
  }

  get description() {
    return this.CreatePostForm.controls.description;
  }

  onSubmit() {
    const postValue = this.CreatePostForm.getRawValue();
    console.log('Post Value:', postValue);
    console.log(this.CreatePostForm.value);
  }

}
