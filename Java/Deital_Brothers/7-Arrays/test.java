import java.util.ArrayList;
import java.util.*;

public class test 
{
	public static void main(String[] args)
	{

		Scanner pay = new Scanner(System.in);
		
		int[] payAmount = new int[11]; 
		
		System.out.println("Please enter wage"); 
		int sales = pay.nextInt();
		System.out.println(addAmount(sales));
		
		
		
		
	}
	
	public static int addAmount(int totalSales)
	{
		int basicPay = 200;
		int commission = (totalSales * 9) / 100 + basicPay;
		return (int) Math.floor(commission / 10) *10; 
		//return totalWages; 
	}
}

/* 

		int n = 10; 
		
		int[] monkeys = new int[n]; 
		
		for(int i = 0; i < monkeys.length; i++)
        {
        	
        	monkeys[i] = i+1;
        	System.out.println(monkeys[i]); 
        }
        
        System.out.println(Arrays.toString(monkeys));

*/
