public class Martian
{
  private String name;
  private static int count = 0;

  //Martian constructor
  public Martian(String name)
  {
    this.name = name;
    ++count;

    System.out.printf("Martian constructor called with name : %s , currently %d Martian object created \n", this.name , count);
  }

  public String getName()
  {
    return name;
  }

  public static int getCount()
  {
    return count;
  }
}
