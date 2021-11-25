const {BookControl} = require('../src/controllers/baseController');
const bookControl = new BookControl();

test('the data is peanut butter', async () => {
    const data = await bookControl.getAllBooks();
    console.log(data)
    expect(data.statusCode+'').toBe(200+'');
});

test('create book', async () => {
    const book = {
        id: 1,
        title: "Book",
    }
})