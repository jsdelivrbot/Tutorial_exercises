package com.example.charlie.starbuzz;

/**
 * Created by charlie on 5/18/16.
 */
public class Drink
{
    private String name;
    private String description;
    private int imgSrcId;

    //private string constructor used for drink generation
    private Drink(String name, String description, int imgSrcId)
    {
        this.name = name;
        this.description = description;
        this.imgSrcId =imgSrcId;
    }

    //Declare an array of drinks
    public static final Drink[] drinks =
            {
                    new Drink("Black Coffee" , "Taste the fucking aroma of the lovely cunting cup of herbal" ,
                            R.drawable.blackcoffee),
                    new Drink("Expresso", "After a mad drug fuelled session - we know you need something to perk up" ,
                            R.drawable.expresso),
                    new Drink("latte", "This is just your average coffee" , R.drawable.latte)
            };

    public String getName()
    {
        return  name;
    }

    public String getDescription()
    {
        return description;
    }

    public int getImgSrcId()
    {
        return imgSrcId;
    }

    public String toString()
    {
        return this.name;
    }


}
