public class EmployeeTest
{

  public static void main(String[] args)
  {
    Date birth = new Date(7,24,1998);
    Date hire = new Date(3,12,2010);
    Employee charlie = new Employee("Charlie","Storey", birth , hire);

    System.out.println(charlie);
  }

}
