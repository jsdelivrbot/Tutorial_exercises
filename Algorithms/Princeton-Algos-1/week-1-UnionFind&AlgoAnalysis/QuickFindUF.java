/**
* @class - Implementation of Quick Find (eager approach)
*/

public class QuickFindUF
{

   private int[] id;

   public QuickFindUF(int N){
      //set array length and assign number
      //value to each element
      id = new int[N];
      for(int i = 0; i < N; i++){
        id[i] = i;
      }
    }

    //
    public void union(int p, int q){
      int pid = id[p];
      int qid = id[q];
      for(int i = 0; i < id.length; i++){
        //If elemeent part of the the connected
        //component, change value to qid
        if(id[i] == pid){
          id[i] == qid;
        }
      }
    }

    //return boolean based on matching content
    //(connected)
    public boolean connected(int p, int q){
      return id[p] == id[q];
    }



}
