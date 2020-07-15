Vue.component('ColorItem', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  name: 'ColorItem',
  props: ['ColorVal'],
  template: '<li>{{ ColorVal.rgb }}</li>',
  created: function () {
    // `this` points to the vm instance
    console.log(this.ColorVal);
  },
});

const app = new Vue({
  el: '#app',
  data: {
    total: 255,
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' },
    ],
    bool: true,
    message: 'You loaded this page on ' + new Date().toLocaleString(),
  },
  methods: {
    getColorWheelPosition: function (startValue) {
      function isRed(val) {
        val = val & 255;
        if (val < 0 || val > 255) {
          return 255;
        } else if (val < 85) {
          return Math.floor(val * 3);
        } else if (val < 170) {
          return Math.floor(255 - (val - 85) * 3);
        } else {
          return 0;
        }
      }
      function isGreen(val) {
        val = val & 255;
        if (val < 0 || val > 255) {
          return 255;
        } else if (val < 85) {
          return Math.floor(255 - val * 3);
        } else if (val < 170) {
          return 0;
        } else {
          return Math.floor((val - 170) * 3);
        }
      }
      function isBlue(val) {
        val = val & 255;
        if (val < 0 || val > 255) {
          return 255;
        } else if (val < 85) {
          return 0;
        } else if (val < 170) {
          return Math.floor((val - 85) * 3);
        } else {
          return Math.floor(255 - (val - 170) * 3);
        }
      }
      const red = isRed(startValue);
      const green = isGreen(startValue);
      const blue = isBlue(startValue);
      return `rgb(${red}, ${green}, ${blue})`;
    },
  },
  computed: {
    colors: function () {
      const rgbColors = [];
      for (let i = 0; i <= this.total; i++) {
        rgbColors.push({
          rgb: this.getColorWheelPosition(i),
        });
      }
      return rgbColors;
    },
    numbers: function () {
      const rgbColors = [];
      for (let i = 0; i <= this.total; i++) {
        rgbColors.push(i);
      }
      return rgbColors;
    },
  },
});
