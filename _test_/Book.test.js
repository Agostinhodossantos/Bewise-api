const {Book} = require('../src/models/Book');

class MyBook {
    constructor(id, title, description, img_cover, url_location){
        this.id = id;
        this.title = title;
        this.description = description;
        this.img_cover = img_cover;
        this.url_location = url_location;
    }
}

test(`should be ${Object.keys(new Book)}`, () => {
    expect(Object.keys(new Book).toString()).toBe(Object.keys(new MyBook).toString())
});