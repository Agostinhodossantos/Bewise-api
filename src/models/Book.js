class Book {
    constructor(id, title, description, img_cover, url_location){
        this.id = id;
        this.title = title;
        this.description = description;
        this.img_cover = img_cover;
        this.url_location = url_location;
    }
}

module.exports = {
    Book
}