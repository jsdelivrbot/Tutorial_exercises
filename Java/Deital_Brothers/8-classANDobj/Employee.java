public class Employee
{
  private String name;
  private String lastName;
  private Date birthDate;
  private Date hireDate;

  //constructor
  public Employee(String name, String lastName, Date birthDate, Date hireDate)
  {
    this.name = name;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.hireDate = hireDate;
  }

  //convert Employee to string format
  public String toString()
  {
    return String.format("%s %s  Hired: %s , Birthday %s", name, lastName, birthDate, hireDate); 
  }
}
