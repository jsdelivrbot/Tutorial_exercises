import java.util.*;

public class StringPractice
{
     public static void main(String[] args)
     {
          /*
          String word = "Whatever the so so charlie and jack";
          int wordL = word.length();
          for( int i = 0; i < wordL ; i++)
          {
               System.out.println("Character " + i + " is " + word.charAt(i));
          }
          */

          static final char BLANK = ' ';

          Scanner scanner = new Scanner(System.in);
          scanner.useDelimiter(System.getProperty("line.seperator"));
          int index, wordCount, numOfChars;

          System.out.println("Enter a sentence");
          String sentence = scanner.next();

          numOfChars = sentence.length;
          index = 0;
          wordCount = 0;

          while(index < numOfChars)
          {
               while(index < numOfChars && sentence.charAt(index) == BLANK)
               {
                    index++;
               }
               while(index < numOfChars && sentence.charAt(index) != BLANK)
               {
                    index++;
               }
               //after both whiles have run.
               wordCount++;
          }
     }
}
