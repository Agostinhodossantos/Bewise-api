const {BookControl} = require('../src/controllers/baseController');
const bookControl = new BookControl();

test('the data is peanut butter', async () => {
    const data = await bookControl.getBooks();
    expect(data.status+'').toBe(200+'');
});

test('create book', async () => {
    const book = {
        id: 12,
        title: "Book",
    }
   let a =  await bookControl.createBook(book);
})