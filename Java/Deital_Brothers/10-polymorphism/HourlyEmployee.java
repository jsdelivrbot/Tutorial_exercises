public class HourlyEmployee extends Employee
{
  private double hourlyRate;
  private double hours;

  //constructor
  public HourlyEmployee(String first, String last, String ssn, double rate, double hours)
  {
    super(first,last,ssn);
    setRate( rate );   //validation
    setHours( hours ); //validation
  }

  public void setRate(double wage)
  {
    if(wage >= 0.0)
    {
      hourlyRate = wage;
    }
    else
    {
      throw new IllegalArgumentException("Rate must be over £0.0");
    }
  }

  public void setHours(double hours)
  {
    if(hours >= 0.0)
    {
      this.hours = hours;
    }
  }

  public double getHourlyRate()
  {
    return hourlyRate;
  }

  public double getHours()
  {
    return hours;
  }

  //Hourly employee implementation of earnings
  @Override
  public double earnings()
  {
    if(hours <= 40.0) //no OT
    {
      return getHours() * getHourlyRate();
    }
    else
    {
      return (getHours() * getHourlyRate()) + ( getHours() - 40 ) * ( getHourlyRate() * 1.5 );
    }
  }

  //toString implementation of
  @Override
  public String toString()
  {
    return String.format("Hourly Employee: %s \n%s: £%,.2f; %s: %,.2f" , super.toString(),
        "Hourly Wage", getHourlyRate(), "Hours worked", getHours());
  }

}
