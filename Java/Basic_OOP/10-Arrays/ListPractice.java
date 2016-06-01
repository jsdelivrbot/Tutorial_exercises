import java.util.ArrayList;

public class ListPractice
{
     public static void main(String[] args)
     {
          ArrayList<Person> friends = new ArrayList<>();
          ArrayList<String> cars = new ArrayList<>();
          Person person;

          person = new Person("Charlie",'m',30);
          friends.add(person);

          person = new Person("Robbie",'m',20);
          friends.add(person);

          person = new Person("Emma",'f',27);
          friends.add(person);

          cars.add("Toyota");
          cars.add("Mercedes");
          cars.add("BMW");
          cars.add("Mini-Cooper");

          System.out.println(cars.size());

          //Person p = friends.get(1);
          //System.out.println(p.getName());

          for(Person p : friends)
          {
               if(p.getName().equals("Robbie"))
               {
                    System.out.printf("\nFound %s, Age currently is %d" ,
                              p.getName(), p.getAge());
               }
          }



     }
}
