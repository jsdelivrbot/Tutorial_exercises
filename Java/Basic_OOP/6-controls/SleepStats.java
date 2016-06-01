import java.util.*;
import java.text.*;

public class SleepStats
{
  private Scanner scanner;

  public static void main(String[] args)
  {
    SleepStats prog = new SleepStats();
    prog.start();
  }

  public SleepStats()
  {
    scanner = new Scanner(System.in);
    scanner.useDelimeter(System.getProperty("line.seperator"));
  }

  public void start()
  {
    double sleepHour, sum = 0;
    int cnt = 0;

    //enter the room name
    System.out.print("Room name");
    String room = scanner.next();

    //get the hours of sleep
    sleepHour = getDouble("Enter no. of sleep hours? (0 - to finish)");
    while(sleepHour != 0)
    {
      sum += sleepHour;
      cnt++;
      sleepHour = getDouble("Enter no. of sleep hours? (0 - to finish)");
    }

    if(cnt == 0)
    {
      System.out.print("No data entered");
    }
    else
    {
      DecimalFormat df = new DecimalFormat("0.00");
      System.out.println("Avereage sleep in room " + room + "\n\nAverage hours of sleep per night is " + df.format(sum/cnt) + " hours");
    }
  }

  private double getDouble(String message)
  {
    System.out.print(message);
    result = scanner.nextDouble();
    return result; 
  }
}//end of class
