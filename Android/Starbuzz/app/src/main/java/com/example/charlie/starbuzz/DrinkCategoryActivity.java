package com.example.charlie.starbuzz;

import android.app.ListActivity;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ListView;
import android.widget.ArrayAdapter;
import android.view.View;
import android.content.Intent;


public class DrinkCategoryActivity extends ListActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        //what is this getView() ?? -->
        ListView listDrinks = getListView();
        ArrayAdapter<Drink> listAdapter = new ArrayAdapter<Drink>(this, android.R.layout.simple_list_item_1, Drink.drinks);
        listDrinks.setAdapter(listAdapter);
    }

    public void onListItemClick(ListView listView, View itemView, int position, long id)
    {
        Intent drink = new Intent(DrinkCategoryActivity.this,DrinkActivity.class);
        drink.putExtra(DrinkActivity.EXTRA_DRINKNO, (int) id);
        startActivity(drink);
    }
}
