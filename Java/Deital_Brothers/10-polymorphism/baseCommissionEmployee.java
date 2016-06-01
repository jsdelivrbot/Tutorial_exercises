//baseCommissionEmployee extends CommisionEmployee this time and in doing so
//indirectly extends abstract Employee class

public class baseCommissionEmployee extends CommisionEmployee
{
  private double baseSalary;

  public baseCommissionEmployee(String first, String last, String ssn, double sales, double rate, double salary)
  {
    //Passes 1st three to Employee constructor
    //passes last 2 CommisionEmployee constructor
    super(first,last,ssn,sales,rate);
    setBaseSalary( salary );
  }

  public void setBaseSalary(double salary)
  {
    if(salary > 0.0)
    {
      baseSalary = salary;
    }
    else
    {
      throw new IllegalArgumentException("Salary must be above £0.0");
    }
  }

  public double getBaseSalary()
  {
    return baseSalary;
  }

  //Overide the abstract Employees method in superclass
  @Override
  public double earnings()
  {
    return getBaseSalary() + super.earnings();
  }

  //overide the abstract employee toString method
  @Override
  public String toString()
  {
    return String.format("%s %s; %s: £%,.2f" ,
        "Base-Salaried", super.toString(),
        "base Salary", getBaseSalary());
  }
}
