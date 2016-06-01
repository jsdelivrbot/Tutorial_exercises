//inputs a persons age

import java.util.*;
public class AgeInputMain
{
     public static void main(String[] args)
     {
          GregorianCalendar today;
          int age, thisYear, bornYear;
          String answer;
          Scanner scanner = new Scanner(System.in);

          AgeInputVer2 input = new AgeInputVer2();
          age = input.getAge("How old are you?");

          //You cannot call today with a get method -- > as below
          today = new GregorianCalendar();
          thisYear = today.get(Calendar.YEAR);

          bornYear = thisYear - age;
          System.out.println("Have you already had a birthday this year?: ");
          answer = scanner.next();

          if(answer.toUpperCase().equals("N"))
          {
               --bornYear;
          }

          System.out.println("You were born in " + bornYear);
     }
}
