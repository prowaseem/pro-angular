import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationService {

  private title: string;
  private theme_classes: string;
  private logo_has_image: boolean;
  private logo_image: string;

  constructor() {
    this.title = 'Pro Angular';
    this.theme_classes = 'blue-theme';
    this.logo_has_image = false;
    this.logo_image = '';
  }
  get applicationTitle():string{
    return this.title;
  }
  set applicationTitle(title){
    this.title = title;
  }
  get themeClasses():string{
    return this.theme_classes;
  }
  set themeClasses(class_names){
    this.theme_classes = class_names;
  }
  get logoHasImage():boolean{
    return this.logo_has_image;
  }
  set logoHasImage(action:boolean){
    this.logo_has_image = action;
  }
  get logoImage():string{
    return this.logo_image;
  }
  set logoImage(path:string){
    this.logo_image = path;
  }
}
