import java.util.Arrays;

public class LinearSearch
{
          //Genric LinearSearch used to identify an element in an array
          public static int linSearch(int[] num, int value)
          {
               int loc = 0;

               while(loc < num.length && num[loc]!=value)
               {
                    loc++;
               }

               if(loc == num.length){return -1;}
               else{return loc;}
          }

          //Binary search used to identify an element in array *needs to be sorted
          public static int binarySearch(int[] number, int searchValue)
          {
               int low = 0,
                   high = number.length - 1,
                   mid = (low + high) / 2;

               while(low <= high && number[mid] != searchValue)
               {
                    //if --> computed mid element is lower than searchValue
                    if(number[mid] < searchValue)
                    {
                         low = mid + 1;
                    }
                    else //if --> computed mid element is higher than searchValue
                    {
                          high = mid - 1;
                     }
                     mid = (low+high)/2;
               }

                     if(low > high)
                     {
                          mid = -1;
                     }
                     return mid;
          }

          //[][][][] Sorting methods [][][][] -------------------------->

          //implemeting the selection sort
          public static void selectionSort(int[] number)
          {
               int minIndex,
                   length,
                   temp;
               length = number.length;

               for(int startIndex = 0 ; startIndex <= length - 2; startIndex++)
               {
                    //each iteration of the for loop is one pass
                    minIndex = startIndex;
                    System.out.println("minIndex = " + minIndex);

                    //find the smallest in this pass at the postion minIndex
                    for(int i = startIndex+1; i <= length-1; i++)
                    {
                         System.out.println("value i is " + i);
                         System.out.println("number[i] is " + number[i]);
                         System.out.println("number[minIndex] is " + number[minIndex]);
                         System.out.println("if...(" + number[i] + " IS LOWER than " + number[minIndex] + ")");
                         if(number[i] < number[minIndex])
                         {
                              minIndex = i;
                              System.out.println("MATCH : minIndex is now " + i);
                              System.out.println(Arrays.toString(number));
                              System.out.println();
                         }
                    }

                    System.out.println();
                    System.out.println(Arrays.toString(number));
                    System.out.println("FOR LOOP goes back to to top!");
                    System.out.println();
                    temp                = number[startIndex];
                    number[startIndex]  = number[minIndex];
                    number[minIndex]    = temp;
               }//FOR end
          }

          public static void main(String[] args)
          {

                         int[] practice = {10,2,1,3,22,8,6,5};

                         selectionSort(practice);
          }

}


/*
//implemeting the selection sort
public void selectionSort(int[] number)
{
     int minIndex,
         length,
         temp;
     length = number.length;

     for(int startIndex = 0 ; startIndex <= length - 2; startIndex++)
     {
          //each iteration of the for loop is one pass
          minIndex = startIndex;

          //find the smallest in this pass at the postion minIndex
          for(int i = startIndex+1; i <= length-1; i++)
          {
               if(number[i] < number[minIndex])
               {
                    minIndex = i;
               }
          }

          temp                = number[startIndex];
          number[startIndex]  = number[minIndex];
          number[minIndex]    = temp;
     }//FOR end
}
*/
