package com.hfad.beeradvisor;
import java.util.ArrayList;
import java.util.List
/**
 * Created by carlos on 03/05/16.
 */
;

public class BeerExpert
{
    List<String> getBrands(String strong)
    {
        List<String> strength = new ArrayList<String>();
        if(strong.equals("Below 4%"))
        {
            strength.add("Skol Light - 2.6%");
            strength.add("Bravaria Light - 3.4");
            strength.add("Fosters Radley - 3.8%");
        }
        else
        {
            strength.add("too strong baby ;)");
            strength.add("lets go again");
        }
        return strength;
    }
}
