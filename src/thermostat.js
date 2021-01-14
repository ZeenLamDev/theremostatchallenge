class Thermostat {

  constructor() {
    this.temperature = 20;
    this.min = 10;
    this.max = 32;
    this.powersavemax = 25;
    this.powersavemode = true;
    this.default = 20;
  }

  up() {
    if (this.powersavemode === true && this.temperature === this.powersavemax) {
      throw "Maximum powersave temperature reached."
    }
    else if (this.temperature === this.max) {
      throw "Maximum temperature reached."
    }
    ++ this.temperature
  }

  down() {
    if (this.temperature === this.min) {
    throw "Minimum temperature reached"
    }
    -- this.temperature
  }

  powersave() {
      this.powersavemode = true;
  }

  powersaveOff() {
    this.powersavemode = false;
  }

  reset() {
    this.temperature = this.default;
  }

}
