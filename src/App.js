import { Lightning } from '@lightningjs/sdk';
import { Button } from "../components/Button";

export default class App extends Lightning.Component {
  constructor(stage) {
    super(stage);

    const buttonsContainer = new Lightning.Element(stage);
    buttonsContainer.x = 100;
    buttonsContainer.y = 100;
    buttonsContainer.w = 700;
    buttonsContainer.h = 300;
    buttonsContainer.color = 0xff900000;
    buttonsContainer.rect = true;

    this.childList.add(buttonsContainer);

    const leftButton = new Button(stage);
    leftButton.setLabel("Left Button");
    leftButton.x = 30;
    leftButton.y = 30;


    const rightButton = new Button(stage);
    rightButton.setLabel("Right Button");
    rightButton.x = leftButton.x + leftButton.w + 25;
    rightButton.y = leftButton.y;

    buttonsContainer.childList.add(leftButton);
    buttonsContainer.childList.add(rightButton);

    // 2. Update the Button.js file so that we can give custom
    // background colors to our buttons, like:
    rightButton.setBackgroundColor(0xff200000); /* <-- Red */
  }  

  /*static _template() {
    return {
      w: 1020,
      h: 800,
      rect: true,
      color: 0xff1c1c1c,      
    }
  }*/
}
