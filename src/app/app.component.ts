import { Component, OnInit } from '@angular/core';
import {
  faDoorClosed,
  faDoorOpen,
  faSignOutAlt,
  faPlusCircle,
  faBold,
} from '@fortawesome/free-solid-svg-icons'; //import icon
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  faDoorClosed = faDoorClosed;
  faBold = faBold;
  faPlusCircle = faPlusCircle;

  faSignOutAlt = faSignOutAlt;

  faDoorOpen = faDoorOpen;
  selectedText: any;
  text: any;
  bold = false;
  constructor() {}
  ngOnInit(): void {
    document.getElementById('ip')!.addEventListener('mouseup', function (e) {
      var txt = this.innerText;
      var selection = window.getSelection();
      var start = selection!.anchorOffset;
      var end = selection!.focusOffset;
      if (start >= 0 && end >= 0) {
        console.log('start: ' + start);
        console.log('end: ' + end);
      }
    });
  }

  makeBold() {
    this.selectedText = window.getSelection()!.toString();
    this.text = document.getElementById('text');

    if (this.bold) {
      this.bold = false;
      var editedText = this.text!.innerText.replace(
        this.selectedText,
        `<span class="fw-500">${this.selectedText} </span>`
      );
      this.text!.innerHTML = editedText;
    } else {
      this.bold = true;
      var editedText = this.text!.innerText.replace(
        this.selectedText,
        `<span class="fw-1000">${this.selectedText} </span>`
      );
      this.text!.innerHTML = editedText;
    }
  }
  selectFont(font: any) {
    this.selectedText = window.getSelection()!.toString();
    this.text = document.getElementById('text');

    if (font.value == 1) {
      var editedText = this.text!.innerText.replace(
        this.selectedText,
        `<span class="font1">${this.selectedText} </span>`
      );
      this.text!.innerHTML = editedText;
    }
    if (font.value == 2) {
      var editedText = this.text!.innerText.replace(
        this.selectedText,
        `<span class="font2">${this.selectedText} </span>`
      );
      this.text!.innerHTML = editedText;
    }
  }
  selectColor(color: any) {
    this.selectedText = window.getSelection()!.toString();
    this.text = document.getElementById('text');

    var editedText = this.text!.innerText.replace(
      this.selectedText,
      `<span style="color:${color.value}">${this.selectedText} </span>`
    );
    this.text!.innerHTML = editedText;
  }
}
