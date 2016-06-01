public class basePlusEmployeeCommission extends EmployeeCommission
{

  private double baseSalary;

  //constructor
  public basePlusEmployeeCommission(String first, String last, String ssn, double sales ,double rate, double salary)
  {
    super(first,last,ssn,sales,rate);
    setBaseSalary(salary);
  }

  //set the base salary
  public void setBaseSalary(double salary)
  {
    baseSalary = salary;
  }

  public double getBaseSalary()
  {
    return baseSalary;
  }

  @Override
  public double earnings()
  {
    return baseSalary + super.earnings();
  }

  @Override
  public String toString()
  {
    return String.format("%s %s\n%s: %.2f", "base salaried", super.toString(), "base salary", getBaseSalary());
  }

}
