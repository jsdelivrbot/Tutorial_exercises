//Simple service class for age input


import java.util.*;
public class AgeInputVer1
{
     private static final String DEFAULT_MESSAGE = "Your age: ";

     private Scanner scanner;

     public AgeInputVer1()
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
                    return age;
               }
               catch(InputMismatchException e)
               {
                    //added to remove redundant int from the buffer
                    scanner.next();
                    System.out.println("Invalid entry please try again: Digits only");
                    System.out.println(e.getMessage());
                    e.printStackTrace();
               }
          }
     }
}
