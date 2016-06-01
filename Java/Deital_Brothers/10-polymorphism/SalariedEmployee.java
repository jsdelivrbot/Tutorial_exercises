//SalariedEmployee will provide concrete class to Abstract class Employee

public class SalariedEmployee extends Employee
{
  //declare class specific variables
  private double weeklySalary;

  //declare constructor
  public SalariedEmployee(String first, String last, String ssn, double salary)
  {
    super(first,last,ssn); //pass to abstract Employee constructor
    setWeeklySalary( salary );
  }

  //set salary
  public void setWeeklySalary(double salary)
  {
    if(salary >= 0.0)
    {
      weeklySalary = salary;
    }
    else
    {
      throw new IllegalArgumentException("Salary must be over £0.0 ");
    }
  }

  public double getWeeklySalary()
  {
    return weeklySalary;
  }

  //Methods below override abstract class Employee methods

  //calculate earnings
  @Override
  public double earnings()
  {
    return getWeeklySalary();
  }

  //Overide toString method
  @Override
  public String toString()
  {
    return String.format("Salaried Employee: %s\n%s £%,.2f" , super.toString(),
          "Weekly Salary", getWeeklySalary());
  }
}
