public class MartianTest
{
  public static void main(String[] args)
  {
    //accessing the static class method getCount
    System.out.printf("The number martians that have been created are : %d \n", Martian.getCount());

    //create two aliens
    Martian lenny = new Martian("lenny");
    Martian pasco = new Martian("pasco");

    System.out.printf("The number of martians that have been created are : %d \n"  ,Martian.getCount());

    System.out.printf("lenny asks the counter variable , how many martians objects? : %d", lenny.getCount());
  }
}
