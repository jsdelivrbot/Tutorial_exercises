public class Scoreboard
{
     private int numOfEntries = 0;
     private GameEntry[] board;

     public Scoreboard(int capacity)
     {
          board = new GameEntry[capacity];
     }

     //attempt to add a new score to the colllection
     public void add(GameEntry e)
     {
          int newScore = e.getScore();

          //is the new entry e a really high score
          if(numOfEntries < board.length || newScore > board[numOfEntries-1].getScore())
          {
               if(numOfEntries < board.length)
               {
                    numOfEntries++;
               }
          // (2)
          int j = numOfEntries - 1;
          while(j > 0 && board[j-1].getScore() < newScore)
          {
                    //(3)
                    board[j] = board[j-1];
                    j--;
          }
          board[j] = e;
          }//end of if
     }//end of add method

     //attempt to rmove an entry from the ScoreBoard
     public GameEntry remove(int i) throws IndexOutOfBoundsException
     {
          if(i < 0 || i >= numOfEntries)
          {
               throw new IndexOutOfBoundsException("Invalid index: " + i);
          }
          //save the object to be removed
          GameEntry temp = board[i];
          for(int j = i; j < numOfEntries -1; j++)
          {
               board[j] = board[j+1]; //shift one cell to the left
          }
          board[numOfEntries-1] = null; //null out the old last score
          numOfEntries--
          return temp;
     }
}

/*

Method explanations
METHOD - ADD
(1) -
(2) - set j to be last entry on ScoreBoard array [-1 needed as numOfentries is always +1 more than array]
(3) - Shift the elements of the array to the right one , only if they don't meet the condition in the while loop

*/
