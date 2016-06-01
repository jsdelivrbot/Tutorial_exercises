//Simple service class for age input
//version 3 - adds negative integer Exception to error catching
import java.util.*;
public class AgeInputVer2
{
     private static final String DEFAULT_MESSAGE = "Your age: ";

     private Scanner scanner;

     public AgeInputVer2()
     {
          scanner = new Scanner(System.in);
     }

     public int getAge()
     {
          return getAge(DEFAULT_MESSAGE);
     }

     public int getAge(String prompt)
     {
          int age;

          while(true)
          {
               System.out.print(prompt);
               try
               {
                    age = scanner.nextInt();
                    if(age < 0)
                    {
                         throw new Exception("Negative Integers not allowed");
                    }
                    return age;//input okay so return the value and continue the code
               }
               catch(InputMismatchException e)
               {
                    //added to remove redundant int from the buffer
                    scanner.next();
                    System.out.println("Invalid entry please try again: Digits only");
               }
               catch(Exception e)
               {
                    System.out.println("Error: " + e.getMessage());
               }
               finally
               {
                    System.out.println("Cleanup code would go here for resource mngmt : try/catch finished");
               }
          }
     }
}
