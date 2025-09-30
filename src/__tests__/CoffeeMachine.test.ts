import { Drink } from '../Drink';
import { CoffeeMachine } from '../CoffeeMachine';

describe("CoffeeMachine", () => {
  it("should serve coffee if exact money inserted", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 0, "small");

    expect(machine.serve(drink, 2, false, 10)).toBe("Serving Coffee (small)");
  });

  it("should not serve coffee if not enough money inserted", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 0, "small");

    expect(machine.serve(drink, 1, false, 10)).toBe("Not enough money");
  });

  it("should serve Cappuccino if more money is inserted and return the change", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Cappuccino", 3, false, 0, "small");

    const result = machine.serve(drink, 5, false, 13);

    expect(result).toBe("Serving Cappuccino (small) with change 2.00");
  });

  it("should serve large Chocolate", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Chocolate", 2.5, false, 0, "large");

    const result = machine.serve(drink, 3.5, false, 13);

    expect(result).toBe("Serving Chocolate (large)");
  });

  it("should serve medium Chocolate with 20% discount", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Chocolate", 2.5, false, 0, "medium");
    
    const result = machine.serve(drink, 2.4, false, 16);

    expect(result).toBe("Serving Chocolate (medium)");
  });

  it("should not serve large Latte with 10 sugars", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Latte", 3.5, false, 10, "large");
    
    const result = machine.serve(drink, 3.8, false, 13);

    expect(result).toBe("Error: too much sugar");
  });

  it("should serve large Latte with 2 sugars for free", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Latte", 3.5, false, 2, "large");
    
    const result = machine.serve(drink, 4.5, false, 13);

    expect(result).toBe("Serving Latte (large)");
  });

  it("should serve large Latte with 5 sugars for 30 cents more", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Latte", 3.5, false, 5, "large");
    
    const result = machine.serve(drink, 4.8, false, 13);

    expect(result).toBe("Serving Latte (large)");
  });

  it("should not serve small Latte without price", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Latte", -1, false, 0, "small");
    
    const result = machine.serve(drink, 5, false, 13);

    expect(result).toBe("Error: invalid price");
  });

  it("should serve the 5th drink for free", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Tea", 1.5, false, 0, "medium");
    
    machine.serve(drink, 2, true, 13);
    machine.serve(drink, 2, true, 13);
    machine.serve(drink, 2, true, 13);
    machine.serve(drink, 2, true, 13);
    const result = machine.serve(drink, 0, true, 13);

    expect(result).toBe("Serving Tea (medium)");
  });

  it("should make small Coffee 20 cents more", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, true, 0, "small");
    
    const result = machine.serve(drink, 2.2, false, 13);

    expect(result).toBe("Serving Coffee (small)");
  });
});
