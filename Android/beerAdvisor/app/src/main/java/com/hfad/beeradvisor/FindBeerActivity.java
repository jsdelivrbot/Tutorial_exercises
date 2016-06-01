package com.hfad.beeradvisor;

import android.app.Activity;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Spinner;
import android.widget.TextView;
import java.util.List;

public class FindBeerActivity extends Activity
{
    //import beerExpert class with added brands
    private BeerExpert expert = new BeerExpert();

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_find_beer);
    }

    public void onClickFindBeer(View view)
    {

        TextView brands = (TextView) findViewById(R.id.brands);
        //brands.setText("onClickFindBeer selected");

        Spinner strength = (Spinner) findViewById(R.id.strength);
        String beerType = String.valueOf(strength.getSelectedItem());

        //get recommendations from the beer expert
        List<String> brandsList = expert.getBrands(beerType);
        StringBuilder brandsFormatted = new StringBuilder();
        for(String brand : brandsList)
        {
            brandsFormatted.append(brand).append('\n');
        }

        //display the beers
        brands.setText(brandsFormatted);
    }
}
