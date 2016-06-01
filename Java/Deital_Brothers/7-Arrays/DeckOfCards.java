//Deck of cards represents a 52 pack deck of playing cards 

import java.security.*;
import java.util.Random;

public class DeckOfCards
{

	private Card[] deck;	//creates a Card array named deck <--- **Note only declares an array object 
	private int currentCard;
	private static final int NUMBER_OF_CARDS = 52; 
	private static final SecureRandom randomNumbers = new SecureRandom();
	
	//Constructor when the DeckOfCards class is called 
	public DeckOfCards()
	{
		String[] faces = {"Ace","Deuce","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"};
		String[] suits = {"Hearts","Diamonds","Clubs","Spades"};
		
		deck = new Card[NUMBER_OF_CARDS]; //create an array of 52 card objects --> All point to null as they have yet to be instaitated. 
		currentCard = 0; 
		
		//populate the deck with cards 
		for(int count = 0; count < deck.length; count++)
		{
			deck[count] = new Card(faces[count % 13], suits[count / 13]); 
		}
		 	
	}
	
	//shuffle the deck with a one pass algorithm
	public void shuffle()
	{
		currentCard = 0; 
		
		//for each card pick another random card (0-51) and swap them
		for(int first = 0; first < deck.length; first++)
		{
			//select random number between (0-51)
			int second = randomNumbers.nextInt(NUMBER_OF_CARDS);
			
			//Swap random second card with first card
			Card temp = deck[first];
			deck[first] = deck[second];
			deck[second] = temp;
		}
	}
	
	//deal one card 
	public Card dealCard()
	{
		//determine wether cards remain to be dealt
		if(currentCard < deck.length)
		{
			return deck[currentCard++];
		}
		else 
		{
			return null;
		}
	}



}//end of Deck of Cards Class
