import java.util.HashMap;
import java.util.ArrayList;
import java.util.Collections;

public class MapPractice
{
     public static void main(String[] args)
     {
          Map<String,String> countries = new HashMap<String,String>(20);

          countries.put("ENG", "England");
          countries.put("USA", "America");
          countries.put("BZL", "Brazil");
          countries.put("JPN", "Japan");
          countries.put("FR", "France");

          String name = countries.get("JPN");
          System.out.println(name);

     }
}
