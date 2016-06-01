public class Card
{

	//create attributes of playing card
	private String face; 
	private String suit;
	
	//Card Constructor 
	public Card(String face, String suit)
	{
		this.face = face; 
		this.suit = suit;
	}
	
	//toString method is used implicitly when an object is called with an expectant String result
	public String toString()
	{
		return "face " + face + " of " + suit;
	}
}
