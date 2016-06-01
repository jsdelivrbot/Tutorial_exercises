import java.util.*;

public class RegularEx
{

     public static boolean isLetter(String s)
     {
          if(s.length() > 1 || s.equals(""))
          {
               return false;
          }
          char asc = s.charAt(0);
          int ii = (int)asc;
          return (asc >= 65 && asc <=  90) || (asc >= 97 && asc <= 122) ? true : false;
     }

     public static void main(String[] args)
     {
          System.out.println(isLetter(""));
          System.out.println(isLetter("?"));
          System.out.println(isLetter("]"));
          System.out.println(isLetter("A"));
          System.out.println(isLetter("E"));
     }
}
