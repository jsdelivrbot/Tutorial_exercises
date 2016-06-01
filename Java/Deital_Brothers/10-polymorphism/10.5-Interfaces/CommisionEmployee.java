public class CommisionEmployee extends Employee
{
  private double grossSales;
  private double commissionRate;

  public CommisionEmployee(String first, String last, String ssn, double grossSales, double rate)
  {
    super(first, last, ssn);
    setGrossSales( grossSales );
    setCommissionRate( rate );
  }

  public void setGrossSales(double sales)
  {
      if(sales > 0.0)
      {
        grossSales = sales;
      }
      else
      {
        throw new IllegalArgumentException("Sales figures needs to be over £0.0");
      }
  }

  public double getSales()
  {
    return grossSales;
  }

  public void setCommissionRate(double rate)
  {
    if(rate > 0.0)
    {
      commissionRate = rate;
    }
    else
    {
      throw new IllegalArgumentException("Rate needs to be over 0.0");
    }
  }

  public double getCommissionRate()
  {
    return commissionRate;
  }

  //Earnings calculation overides abstract earnings class
  @Override
  public double earnings()
  {
    return getSales() * getCommissionRate();
  }

  //return overridden toString method from abstract superclass
  @Override
  public String toString()
  {
    return String.format("%s: %s\n%s: £%,.2f; %s: %.2f",
        "Commission Employee" , super.toString() ,
        "Gross Sales", getSales(),
        "commission Rate", getCommissionRate());
  }

} // end of class
