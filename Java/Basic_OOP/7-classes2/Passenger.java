public class Passenger
{
     private String driver;
     private String driverPassenger;
     private String secondPassenger;

     public Passenger(String name, String name2, String name3)
     {
          driver = name;
          driverPassenger = name2;
          secondPassenger = name3;
     }

     public Passenger(String name,String name2)
     {
          this(name,name2,"nill passenger");
     }

     public Passenger(String name)
     {
          this(name,"nill passenger","nill passenger");
     }

     public String getDriver()
     {
          return driver;
     }

     public String getPassenger()
     {
          return driverPassenger;
     }

     public String getSecondPassenger()
     {
          return secondPassenger;
     }

}
