package com.example.charlie.facttest;

import java.util.Random;
import java.util.Arrays;

/**
 * Created by charlie.
 */

public class QuoteBook {

    //Fields
    private String[] facts = {
            "Only those who will risk going too far can possibly find out how far one can go",
            "A ship is always safe at the shore - but that is NOT what it is built for.",
            "If you are not willing to risk the unusual, you will have to settle for the ordinary.",
            "The risk of a wrong decision is preferable to the terror of indecision.",
            "There’s something liberating about not pretending. Dare to embarrass yourself. Risk.",
            "The world is not as dangerous as the older generation would like you to believe. Anyone I know who has ever taken a risk and lost a job has ended up getting a better one two years later.",
            "He who risks and fails can be forgiven. He who never risks and never fails is a failure in his whole being.",
            "Yes, risk-taking is inherently failure-prone. Otherwise, it would be called sure-thing-taking.",
            "A man would do nothing if he waited until he could do it so well that no one would find fault with what he has done",
            "The knowledge of the world is only to be acquired in the world, and not in a closet.",
            "Without the element of uncertainty—the bringing off of even—the greatest triumph would be dull, routine, and eminently unsatisfying.",
            "Trust your own instinct. Your mistakes might as well be your own, instead of someone else’s."
    };

    private Random random = new Random();

    public String getFact(){

        int randomIndex = random.nextInt(12);
        String fact = facts[randomIndex];
        return fact;

    }


}
