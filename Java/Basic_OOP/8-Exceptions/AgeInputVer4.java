//Simple service class for age input
//version 3 - adds negative integer Exception to error catching
import java.util.*;
public class AgeInputVer4
{
     private static final String DEFAULT_MESSAGE = "Your age: ";

     private Scanner scanner;
     private static final int DEFAULT_LOWER_BOUND = 0;
     private static final int DEFAULT_HIGHER_BOUND = 99;
     private int lowerBound;
     private int upperBound;

     private void init(int low, int high)
     {
          lowerBound = low;
          upperBound = high;
          Scanner scanner = new Scanner(System.in);
     }

     public AgeInputVer4()
     {
          init(DEFAULT_HIGHER_BOUND,DEFAULT_LOWER_BOUND);
     }

     public AgeInputVer4(int upper, int lower) throws IllegalArgumentException
     {
          if(lower > higher)
          {
               assert lower > higher;
               throw new IllegalArgumentException("Low was larger than high");
          }
          else
          {
               init(lower,higher);
          }
     }

     public int getAge() throws Exception
     {
          return getAge(DEFAULT_MESSAGE);
     }

     public int getAge(String prompt) throws Exception
     {
          int age;

          while(true)
          {
               System.out.print(prompt);
               try
               {
                    age = scanner.nextInt();
                    if(age < lowerBound || age > upperBound)
                    {
                         //we are simply propgating this exception to the client
                         throw new Exception("Input out of bound!");
                    }
                    return age;//input okay so return the value and continue the code
               }
               catch(InputMismatchException e)
               {
                    //added to remove redundant int from the buffer
                    scanner.next();
                    System.out.println("Invalid entry please try again: Digits only");
               }
               /*catch(Exception e)   <------ remove the catch block
               {
                    System.out.println("Error: " + e.getMessage());
               } */
               finally
               {
                    System.out.println("Cleanup code would go here for resource mngmt : try/catch finished");
               }
          }
     }
}
