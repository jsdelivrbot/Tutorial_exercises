/* Employee Abstrat superclass
  Abstract class will provide base gets/sets and provide method sig for calculating
  earnings() dependent on object subclass who will provide actual implementation of method
*/

public abstract class Employee
{
  private String firstName;
  private String lastName;
  private String socialSecurtiyNumber;

  //Three argument construtor built
  public Employee(String first, String last, String SSN)
  {
    firstName = first;
    lastName = last;
    socialSecurtiyNumber = SSN;
  }

  //getters and setters declared
  public void setFirstName(String first)
  {
    firstName = first;
  }

  public void setLastName(String last)
  {
    lastName = last;
  }

  public void setSocialSecurityNumber(String ssn)
  {
    socialSecurtiyNumber = ssn;
  }

  public String getFirstName()
  {
    return firstName;
  }

  public String getLastName()
  {
    return lastName;
  }

  public String getSocialSecurityNumber()
  {
    return socialSecurtiyNumber;
  }

  //return string representation of Employee toString()
  @Override
  public String toString()
  {
    return String.format("%s %s\nSocial Security Number: %s", getFirstName(), getLastName(), getSocialSecurityNumber());
  }

  //abstract method to be overidden by concrete subclasses when instantiated - this is classed as
  //a supertype
  public abstract double earnings();


}
