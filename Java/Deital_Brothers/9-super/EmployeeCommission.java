public class EmployeeCommission
{
  private String firstName;
  private String lastName;
  private String socialSecurityNumber;
  private double grossSales;
  private double commissionRate;

  //constructor
  public EmployeeCommission(String first, String last, String ssn, double sales, double rate)
  {
    firstName = first;
    lastName = last;
    socialSecurityNumber = ssn;
    setGrossSales(sales);
    setCommissionRate(rate);
  }

  //setters and getters
  public void setFirstName(String firstname)
  {
    this.firstName = firstname;
  }

  public String getFirstName()
  {
    return firstName;
  }

  public void setLastName(String lastName)
  {
    this.lastName = lastName;
  }

  public String getLastName()
  {
    return lastName;
  }

  public String getSSN()
  {
    return socialSecurityNumber;
  }

  public void setGrossSales(double sales)
  {
    if(sales >= 0.0)
    {
      grossSales = sales;
    }
    else
    {
      throw new IllegalArgumentException("Sales must be above £1.00");
    }
  }

  public double getGrossSales()
  {
    return grossSales;
  }

  public void setCommissionRate(double rate)
  {
    if(rate > 0.0 && rate < 1.1)
    {
      commissionRate = rate;
    }
    else
    {
      throw new IllegalArgumentException("Rate must be in between 0.0 and 1.0");
    }
  }

  public double getCommissionRate()
  {
    return commissionRate;
  }

  //calculate earnings
  public double earnings()
  {
    return getCommissionRate() * getGrossSales();
  }

  //modify object.lang toString

  public String toString()
  {
    return String.format("%s: %s %s\n%s : %s\n%s: %.2f\n%s: %.2f",
        "Commssion Employee" , getFirstName(), getLastName(),
        "Social Sec Number", getSSN(),
        "Gross Sales" , getGrossSales(),
        "commission Rate", getCommissionRate() );
  }

}//end of class
