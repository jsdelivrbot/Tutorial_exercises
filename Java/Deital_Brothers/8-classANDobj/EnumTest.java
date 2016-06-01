import java.util.EnumSet;

public class EnumTest
{
  public static void main(String[] args)
  {
    System.out.println("All new trainers are \n");

    for(Trainers trainer : Trainers.values())
    {
      System.out.printf("%-10s%-45s%s\n", trainer, trainer.getTitle(), trainer.getYear());
    }

  }
}
