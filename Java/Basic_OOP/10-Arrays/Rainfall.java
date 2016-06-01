import java.util.*;

public class Rainfall
{


     public static void main(String[] args)
     {
          Scanner scanner = new Scanner(System.in);
          double[] rainfall = new double[12];
          double annualAverage,
                 sum,
                 difference;

          sum = 0.0;

          for(int i = 0; i < 12; i++)
          {
               System.out.print("Rainfall for month " + (i+1) + " : ");
               rainfall[i] = scanner.nextDouble();
               sum += rainfall[i];
          }

          annualAverage = sum / 12.0;

          for(int i = 0; i < 12; i++)
          {
               System.out.printf("%3d" , i+1);
               System.out.printf("%15.2f" , rainfall[i]);

               //difference
               difference = Math.abs(rainfall[i] - annualAverage);
               System.out.printf("%15.2f\n", difference);
          }

          
     }
}
