import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tabImg = [
    '00AZ000.jpg',
    '00F0000.jpg',
    '00GU000.jpg',
    '01D8000.jpg',
    '046L000.jpg',
    '09XO000.jpg',
    '00B7000.jpg',
    '00FD000.jpg',
    '00H7000.jpg',
    '01DK000.jpg',
    '046U000.jpg',
    '09XY000.jpg',
    '00BJ000.jpg',
    '00FF000.jpg',
    '00HP000.jpg',
    '01DL000.jpg',
    '047K000.jpg',
    '09XZ000.jpg',
    '00BO000.jpg',
    '00FH000.jpg',
    '00HR000.jpg',
    '01E2000.jpg',
    '047V000.jpg',
    '0A89000.jpg',
    '00BQ000.jpg',
    '00FM000.jpg',
    '00II000.jpg',
    '01E6000.jpg',
    '04T0000.jpg',
    '0A8A000.jpg',
    '00BW000.jpg',
    '00FO000.jpg',
    '00IM000.jpg',
    '01EX000.jpg',
    '05ZR000.jpg',
    '0ACY000.jpg',
    '00C3000.jpg',
    '00FQ000.jpg',
    '00IN000.jpg',
    '02TB000.jpg',
    '063N000.jpg',
    '116000.jpg',
    '00C7000.jpg',
    '00FS000.jpg',
    '00TW000.jpg',
    '03ZO000.jpg',
    '066J000.jpg',
    '194000.jpg',
    '00C9000.jpg',
    '00FU000.jpg',
    '00TY000.jpg',
    '040D000.jpg',
    '06Z9000.jpg',
    '197000.jpg',
    '00CB000.jpg',
    '00FW000.jpg',
    '00VF000.jpg',
    '042J000.jpg',
    '080U000.jpg',
    '199000.jpg',
    '00CI000.jpg',
    '00FY000.jpg',
    '00ZV000.jpg',
    '042K000.jpg',
    '08DC000.jpg',
    '407000.jpg',
    '00CO000.jpg',
    '00G3000.jpg',
    '014C000.jpg',
    '042L000.jpg',
    '09UJ000.jpg',
    '467000.jpg',
    '00CU000.jpg',
    '00G5000.jpg',
    '018S000.jpg',
    '042N000.jpg',
    '09X6000.jpg',
    '885000.jpg',
    '00CW000.jpg',
    '00G9000.jpg',
    '019L000.jpg',
    '042O000.jpg',
    '09X8000.jpg',
    '887000.jpg',
    '00CY000.jpg',
    '00GD000.jpg',
    '01AE000.jpg',
    '042U000.jpg',
    '09XI000.jpg',
    '00D2000.jpg',
    '00GF000.jpg',
    '01AU000.jpg',
    '045V000.jpg',
    '09XJ000.jpg',
    '00D4000.jpg',
    '00GJ000.jpg',
    '01BY000.jpg',
    '046B000.jpg',
    '09XK000.jpg',
    '00E8000.jpg',
    '00GQ000.jpg',
    '01C2000.jpg',
    '046H000.jpg',
    '09XL000.jpg',
    '00ES000.jpg',
    '00GS000.jpg',
    '01CB000.jpg',
    '046J000.jpg',
    '09XN000.jpg',
  ];
  constructor() {
    // const styleEcusson = document.head.children['ecusson'];
    // let style = document.createElement('style');
    // style.setAttribute('name', 'ecusson');
    // style.innerHTML = ' .color { color: chocolate; }';
    // document.head.append(style)
    // console.log(document.head.children['ecusson'])
  }
  ngOnInit(): void {
    const elStyle = document.getElementsByTagName('style')['ecusson'];
    this.tabImg.forEach((name) => {
      const imgName = name.split('.')[0];
      const style = document.createElement('style');
      const className = 'ecusson-' + imgName;

      if (elStyle) {
        elStyle.innerHTML +=
          ' .' +
          className +
          " { background-image: url('/assets/ecussons/" +
          imgName +
          ".jpg');} ";
      } else {
        style.setAttribute('name', 'ecusson');
        style.innerHTML =
          '.' +
          className +
          " { background-image: url('/assets/ecussons/" +
          imgName +
          ".jpg');} ";
        document.getElementsByTagName('head')[0].appendChild(style);
      }
    });
    console.log(elStyle);
  }
}
