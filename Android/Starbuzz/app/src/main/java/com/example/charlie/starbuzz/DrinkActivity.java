package com.example.charlie.starbuzz;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

public class DrinkActivity extends AppCompatActivity {

    public static final String EXTRA_DRINKNO = "drinkno";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_drink);

        //get the drink from the intent
        int drinkNo = (Integer)getIntent().getExtras().get(EXTRA_DRINKNO);
        Drink drink = Drink.drinks[drinkNo];

        //populate the drinks image
        ImageView photo = (ImageView)findViewById(R.id.photo);
        photo.setImageResource(drink.getImgSrcId());
        photo.setContentDescription(drink.getName());

        //Populate the drink name
        TextView name = (TextView)findViewById(R.id.name);
        name.setText(drink.getName());

        //populate the drinks description
        TextView description = (TextView)findViewById(R.id.description);
        description.setText(drink.getName());

    }
}
