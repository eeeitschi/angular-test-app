import {Component} from '@angular/core';

@Component({
  selector: 'app-perspective-view',
  standalone: true,
  imports: [],
  templateUrl: './perspective-view.component.html',
  styleUrl: './perspective-view.component.scss'
})
export class PerspectiveViewComponent {

  protected images: Array<string>;

  constructor() {
    this.images = this._initializeImageArray();
  }


  private _initializeImageArray(): Array<string> {
    return [
      'https://plus.unsplash.com/premium_photo-1673264933048-3bd3f5b86f9d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
      'https://images.unsplash.com/photo-1461696114087-397271a7aedc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];
  }

}
