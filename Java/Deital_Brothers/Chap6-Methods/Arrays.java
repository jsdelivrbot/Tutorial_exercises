public class Arrays
{

	public static void main(String[] args)
	{
		int[] responses = {1,3,4,4,4,5,2,1,3,5,4,3,2,2,1,5,5,1,14}; 
		
		int[] freq = new int[6]; 
		
		for(int answer = 0; answer < responses.length; answer++)
		{
			try
			{
				++freq[responses[answer]];
			}
			catch (ArrayIndexOutOfBoundsException e)
			{
				System.out.println(e); 
				System.out.printf("		responses[%d] = %d\n\n", answer, responses[answer]);
			}
		}
		
		System.out.printf("%s%10%s", "Rating", "Frequency"); 
		for(int rating = 1; rating < freq.length; rating++)
		{
			System.out.printf("%d%10%d\n", rating, freq[rating]);
		}
	}

}
