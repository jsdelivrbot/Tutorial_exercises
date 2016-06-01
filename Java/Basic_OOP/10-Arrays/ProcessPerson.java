import java.util.*;

public class ProcessPerson
{
     public static void main(String[] args)
     {
          Person[] person = new Person[3];
          Scanner scanner = new Scanner(System.in);

          String name, inpStr;
          int age;
          char gender = 'm';

          for(int i = 0; i < person.length; i++)
          {
               System.out.print("Enter name: ");
               name = scanner.next();
               System.out.print("Enter age: ");
               age = scanner.nextInt();
               System.out.print("Enter gender: ");
               try
               {
                    inpStr = scanner.next();
                    gender = inpStr.charAt(0);
               }
               catch(InputMismatchException e)
               {
                    System.out.println(e.getMessage());
                    System.out.println("Caught the cunt");
               }
               //create a new Person and assign values
               person[i] = new Person( );
               person[i].setName ( name );
               person[i].setAge( age );
               person[i].setGender( gender );
          }

          System.out.printf("Average age for array of people is %d \n" , getAverage(person));
          System.out.printf("The oldest person in the group is %s\n", oldest(person));
          getPersonsName(person);

     }
     public static int getAverage(Person[] people)
     {
          int tCount = 0;
          for(int i = 0; i < people.length; i++)
          {
               tCount += people[i].getAge();
          }
          return tCount / people.length;
     }

     public static String oldest(Person[] people)
     {
          Person oldest = people[0];
          for(int i = 1; i < people.length; i++)
          {
               if(people[i].getAge() > oldest.getAge())
               {
                    oldest = people[i];
               }
          }
          return oldest.getName();
     }

     public static void getPersonsName(Person[] people)
     {
          for(Person p : people)
          {
               System.out.printf("Person Name : %s\n" , p.getName());
          }
     }


}
