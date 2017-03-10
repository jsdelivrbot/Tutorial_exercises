/* ACTIONS
========= */

export function selectBook(book){
  //console.log('Book ' + book.title + " has been selected");
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}

export function modifyTitle(book){
  return{
    type: 'BOOK_TRANSFORM',
    payload: book.title
  };
}
