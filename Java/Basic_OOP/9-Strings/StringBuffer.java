import java.util.*;

class Ch9ReplaceVowelsWithX
{
     public static void main (String[] args)
     {

          Scanner scanner = new Scanner(System.in);
          scanner.useDelimiter(System.getProperty("line.separator"));

          StringBuilder tempStringBuilder;
          String inSentence;

          int numOfChars;
          char letter;

          System.out.println("Sentence to write please");
          inSentence = scanner.next();

          tempStringBuilder = new StringBuilder(inSentence);
          numOfChars = tempStringBuilder.length();

          for(int index = 0; index < numOfChars; index++)
          {
               letter = tempStringBuilder.charAt(index);
               if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
               {
                    tempStringBuilder.setCharAt(index ,"X");
               }
          }

     }

}
