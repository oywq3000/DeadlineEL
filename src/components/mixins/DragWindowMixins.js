// dragMixin.js
export const DragWindowMixins = {
    data() {
      return {
        dragging: false,
        dinatesX: 0,
        dinatesY: 0,
      };
    },
    methods: {
      startDrag(event) {
        this.dragging = true;
        this.dinatesX = event.clientX;
        this.dinatesY = event.clientY;
  
        document.onmousemove = (ev) => {
          if (this.dragging) {
            const x = ev.screenX - this.dinatesX;
            const y = ev.screenY - this.dinatesY;
            console.log(window.screenX, window.screenY);
            window.electronAPI.setWinPosition(x, y);
          }
        };
  
        document.onmouseup = (ev) => {
          this.dragging = false;
          //document.onmousemove = null;
        };
      },
    },
  };