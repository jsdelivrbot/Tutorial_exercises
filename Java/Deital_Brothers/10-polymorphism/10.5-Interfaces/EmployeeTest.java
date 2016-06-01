//Test class for objects

public class EmployeeTest
{
  public static void main(String[] args)
  {

    //Create all superclass objects

    SalariedEmployee salaryEmp = new SalariedEmployee("Charlie", "Storey", "11222", 500.0);
    CommisionEmployee commissionEmp = new CommisionEmployee("Richard", "Duvall", "3300121" , 20000.0 , 0.8);
    HourlyEmployee hourlyEmp = new HourlyEmployee("Paul", "Stone", "88196624", 26.0 , 37.0);
    baseCommissionEmployee baseComeEmp = new baseCommissionEmployee("Artie", "McFoo", "971510" , 4000 , 0.5, 700);

    System.out.println("Individuals processed normally");

    System.out.printf("%s\n%s £%,.2f\n\n",
      salaryEmp, "earned" , salaryEmp.earnings());

    System.out.printf("%s\n%s £%,.2f\n\n",
      commissionEmp, "earned" , commissionEmp.earnings());

    System.out.printf("%s\n%s £%,.2f\n\n",
      hourlyEmp, "earned" , hourlyEmp.earnings());

    System.out.printf("%s\n%s £%,.2f\n\n",
      baseComeEmp, "earned" , baseComeEmp.earnings());

      //Create a four element employee array
      Employee[] employees = new Employee[4];

      //Intialize array
      employees[0] = salaryEmp;
      employees[1] = commissionEmp;
      employees[2] = hourlyEmp;
      employees[3] = baseComeEmp;

      System.out.println("Employees processed polymorphically: \n");

      //generate all information about employees polymorphically
      for( Employee currentEmployee: employees )
      {
        System.out.println(currentEmployee); //invoke toString()

        if(currentEmployee instanceof baseCommissionEmployee)
        {
          //downcast employee reference to baseCommissionEmployee to be able to
          //invoke subclass 'setBaseSalary' method.
          baseCommissionEmployee employee = (baseCommissionEmployee) currentEmployee;

          //set 10% wage increase on employee
          employee.setBaseSalary( 1.10 * employee.getBaseSalary());

          System.out.printf(
            "New base salary with 10%% increase is: £%,.2f\n", employee.getBaseSalary());
        } //end of if statement

        System.out.printf("earned: £%,.2f\n\n" , currentEmployee.earnings());
      }

      //get Type name for each object
      for(int j =0; j < employees.length; j++)
      {
        System.out.printf("Employee %d is a %s\n" , j , employees[j].getClass());
      }

  }
}
