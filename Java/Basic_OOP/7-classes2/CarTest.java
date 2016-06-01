public class CarTest
{
     public static void main(String[] args)
     {
          Passenger england = new Passenger("Charlie","Roger","Mike");
          Passenger nyc = new Passenger("Ross","Chandler");
          Passenger brazil = new Passenger("Felipe");

          Car oneEngland = new Car(england);
          Car twoNyc = new Car(nyc);
          Car threeBrazil = new Car(brazil);

          System.out.println(oneEngland);
          System.out.println(twoNyc);
          System.out.println(threeBrazil);

          System.out.println(Car.MixText("AbbyGabbySlabby"));
          System.out.println(Car.MixText("bobobooo"));
          System.out.println("Car object has been called " + Car.getCounter() + " times");
     }
}
