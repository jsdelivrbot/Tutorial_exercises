import java.util.*;
import java.util.regex.*;

public class RegeExPractice
{
     public static void main(String[] args)
     {
          Scanner scanner = new Scanner(System.in);
          scanner.useDelimiter(System.getProperty("line.seperator"));
          String document;
          int javaCount;

          Matcher matcher;
          Pattern pattern = new Pattern("java",Pattern.CASE_INSENSITIVE);

          System.out.println("Sentence to write please");
          document = scanner.next();

          matcher = pattern.matcher(doucment);

          while(matcher.find())
          {
               javaCount++;
          }

          System.out.println("The word java appeared " + javaCount + " times");
     }
}
