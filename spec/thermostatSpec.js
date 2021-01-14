describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('thermostat set to 20', function() {
    it ("the thermostat is set to 20", function() {
      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe('up function', function() {
    it ('increases the temperature by 1 degree', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21)
    });

    it('throws error if trying to exceed max temperature', function() {
      thermostat.temperature = thermostat.max
      expect(function() { thermostat.up() } ).toThrow("Maximum temperature reached.");
    })
  });

  describe('down function', function(){
    it('decreases the temperature by 1 degree', function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(19)
    });
  });

  describe('has a minimum temperature', function() {
    it('will not go below 10', function() {
      for (let i = 0; i < 10; i++) {
        thermostat.down();
      }
      expect(function() { thermostat.down() } ).toThrow('Minimum temperature reached');
      expect(thermostat.temperature).toEqual(10)
    });
  });

  describe('has a power saving mode', function() {
    it('is a power saving mode with', function(){
      thermostat.powersave();
      expect(thermostat.powersavemode).toBe(true);
    })
  })

  describe('powersaving mode', function() {
    it('has a max temp of 25', function() {
      thermostat.powersave();
      expect(thermostat.powersavemax).toEqual(25)
    });
  });

  describe('maximum temperature', function(){
    it ('has a max temp of 32', function(){
      thermostat.powersaveOff()
      expect(thermostat.max).toEqual(32)
    })
  })

  describe('default on', function(){
    it ('has powersave mode defaulted to on', function(){
      expect(thermostat.powersavemode).toEqual(true)
    })
    
  })

  describe('rest temperature', function() {
    it ('resets the temperature to 20', function() {
      thermostat.temperature = 21
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20)
    })
  })

  describe('energy usage', function(){
    it('shows <18 as low-usage', function (){
      thermostat.temperature = 17
      thermostat.usage()
      expect(thermostat.usage()).toEqual("low-usage")
    })

    it('it is considered medium-usage', function() {
      expect(thermostat.usage()).toEqual('medium-usage');
    });

    it('shows > 25 as high-usage', function (){
      thermostat.powersaveOff()
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.usage()).toEqual("high-usage")
    })
  })
});