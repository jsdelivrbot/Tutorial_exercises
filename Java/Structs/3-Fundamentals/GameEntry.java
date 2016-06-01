public class GameEntry
{
     private String name;
     private int score;

     public GameEntry(String cname, int cscore)
     {
          name = cname;
          score = cscore;
     }

     public String getName()
     {
          return name;
     }

     public int getScore()
     {
          return score;
     }

     public String toString()
     {
          return "(" + name + "," + score +")";
     }
}
