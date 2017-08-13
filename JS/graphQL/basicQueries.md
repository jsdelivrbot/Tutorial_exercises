##### Refer back to firstTaste example

#### Create / Query 


#### Mutate

```

// Update user id with 30 and return first name
// id, age and resolve company field

mutation {
updateUser(id:"30", firstName: "yellowlue") {
  firstName
  age
  id
  company {
    name
  }
}
}

// returns
{
  "data": {
    "updateUser": {
      "firstName": "yellowlue",
      "age": 20,
      "id": "30",
      "company": {
        "name": "Google"
      }
    }
  }
}

```
