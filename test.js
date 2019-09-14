const {Board, Servo, Servos, Led} = require('johnny-five');
const board = new Board();

board.on('ready', () => {
    console.log('BOARD READY!');
  
    const s1 = new Servo({
        pin: 0,
        controller: "PCA9685"
      })
      const s2 = new Servo({
        pin: 1,
        controller: "PCA9685"
      })
      const led = new Led({
        pin: 15,
        controller: "PCA9685"
      })
      const servos = new Servos([s1, s2])
    servos.sweep()
    led.pulse()
    board.repl.inject({ led, s1, s2, servos });
  });