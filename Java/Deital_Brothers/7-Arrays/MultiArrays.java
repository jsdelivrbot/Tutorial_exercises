import java.util.Arrays;

public class MultiArrays 
{

	public static void main(String[] args)
	{
	
	
		int[][] array1 = { {1,2,3}, {4,5,6}, {7,8,9} };
		int[][] array2 = { {1,2}, {3}, {4,5,6,7}, {8,9} }; 
		
		System.out.println("Values in array are -->");
		System.out.println(Arrays.deepToString(array1));
		outputA(array1);
		System.out.println();
		
		System.out.printf("All array elements added = %d ", addArray(array1));
		
	
	}

	public static void outputA(int[][] array)
	{
		//loop through the array rows
		for(int row = 0; row < array.length; row++)
		{
			for(int col = 0; col < array[row].length; col++)
			{
				System.out.printf("%d ::: ---> numbered system = [row][col] [%d][%d]", array[row][col], row, col);
			}
			System.out.println();
		}
	}
	
	public static int addArray(int[][] array)
	{
		int total = 0;
		
		for(int row = 0; row < array.length; row++)
		{
			for(int col = 0; col < array[row].length; col++)
			{
				total += array[row][col];
			}
		}
		
		return total;
	}

}
