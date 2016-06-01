public class Practice
{

	public static void main(String[] args)
	{
		int[] numbers = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15};
		int total = 0;
	
		for( int number : numbers )
		{
			if( number % 2 != 0)
			{
				total += number;
			}
		}
		
		System.out.printf("The total of all odd numbers is %d", total); 
	}

}

/* 

FIND THE LOWEST INT  IN AN ARRAY 
	
		int[] numbers = {63,472,12,124,18,10002};
		int low = numbers[0]; 
		
		for(int count = 0; count < numbers.length; count++)
		{
			if(numbers[count] < low)
			{
				low = numbers[count];
			}
		}
		
		System.out.printf("The lwowest number in the array is %d" , low);

*/
