export class MenuItem {
  constructor(public title: string,
              public icon: string,
              public isSelected: boolean,
              public path: string,
              public ariaLabel: string) {
  }
}