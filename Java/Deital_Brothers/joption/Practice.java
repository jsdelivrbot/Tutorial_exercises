import java.util.*;

class Practice
{

	public static void main(String[] args)
	{
	
	int num1; 
	double num2;
	
	Scanner input = new Scanner(System.in);
	Scanner doInput = new Scanner(System.in);
	
	input.useLocale(Locale.ENGLISH);
	
	System.out.print("Please enter your number?"); 
	num1 = input.nextInt();
	System.out.print("\n Please enter a float number now");
	num2 = doInput.nextDouble();
	
	System.out.printf("Your numbers are --> num1 = %d%t, num 2 = %.2f", num1, num2);
	
	}

}
