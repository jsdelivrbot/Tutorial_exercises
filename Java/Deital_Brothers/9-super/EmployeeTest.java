public class EmployeeTest
{
  public static void main(String[] args)
  {
    basePlusEmployeeCommission employ = new basePlusEmployeeCommission("Charlie", "Storey", "11222110", 5000, .02 , 600);

    System.out.println(employ.toString());
  }
}
