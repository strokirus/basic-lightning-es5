import Lightning from "@lightningjs/core";

const PADDING = 20;
const DEFAULT_BACKGROUND_COLOR = 0xff000090;

export class Button extends Lightning.Element {
  constructor(stage) {
    super(stage);

    this.rect = true;
    this.color = DEFAULT_BACKGROUND_COLOR;
  }

  setLabel(label) {
    const labelTexture = new Lightning.textures.TextTexture(this.stage);
    labelTexture.text = label;
    labelTexture.load();

    this.w = labelTexture.getRenderWidth() + PADDING * 2;
    this.h = labelTexture.getRenderHeight() + PADDING / 2;

    const labelContainer = new Lightning.Element(this.stage);
    labelContainer.mount = 0.5;
    labelContainer.x = this.w / 2;
    labelContainer.y = this.h / 2;
    labelContainer.texture = labelTexture;

    this.childList.add(labelContainer);
  }

  setBackgroundColor(color) {
    this.color = color;
  }
}
