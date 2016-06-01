public class Time1Test
{
  public static void main(String[] args)
  {
    Time1 time = new Time1();

    System.out.print("The initial universal time is ");
    System.out.println(time.toString());

    time.setTime(11,32,10);
    System.out.print("The time is now ");
    System.out.println(time.toUniversalString());

  }

}
