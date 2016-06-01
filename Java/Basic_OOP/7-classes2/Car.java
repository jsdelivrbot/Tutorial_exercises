public class Car
{
     private String driver;
     private String driverPassenger;
     private String secondPassenger;
     private String car = "Fucking sitty nissan blad!";
     private static int counter = 0;

     public Car(Passenger list)
     {
          car = this.getCar();
          driver = list.getDriver();
          driverPassenger = list.getPassenger();
          secondPassenger = list.getSecondPassenger();
          counter++;
     }

     public void addDriverDetails(Passenger list)
     {

     }

     public String getCar()
     {
          return car;
     }

     public static int getCounter()
     {
          return counter;
     }

     public static int MixText(String name)
     {
          return name.length();
     }

     public String toString()
     {
          return String.format("The car being driven is %s by a driver named %s Passenger 1 is %s and passenger 2 is %s" ,
                                car, driver, driverPassenger, secondPassenger);
     }

}
