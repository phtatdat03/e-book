const Book = require('../models/Book');

class BookController {

    //[GET] /book/get
    async getBook(req, res) {
        const books = await Book.find({});
        res.send(books)
    }

    //[GET] /book/getTitle
    //EX: http://localhost:5555/book/getTitle?title=harry&type=more
    async getBookByTitle(req, res) {
        const inputString = req.query.title;
        const searchString = String(inputString);

        // Nếu không có giá trị, mặc định là 'more'
        const type = req.query.type || 'more'; 

        // Số lượng sách trả về
        const limit = type === 'less' ? 5 : 10;
        
        // Sử dụng regex để tìm kiếm các sách có tiêu đề chứa inputString
        const books = await Book.find({ title: { $regex: searchString, $options: 'i' } }).limit(limit);

        res.json(books);
    }

    //[POST] /book/save
    saveBook(req, res) {
        Book.create(req.body)
            .then(book => res.json(book))
            .catch(err => res.json(err))
    }

    //[GET] /book/:id
    getBookId(req, res) {
        Book.findById(req.params.id)
            .then(book => res.json(book))
            .catch(err => res.json(err))
    }

    //[GET] /book/slug/:slug
    getBookBySlug(req, res) {
        Book.findOne({ slug: req.params.slug })
            .then(book => res.json(book))
            .catch(err => res.json(err))
    }

    //[PUT] /book/update/:id
    updateBook(req, res) {
        const id = req.params.id;

        Book.findByIdAndUpdate({ _id: id }, {
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            imgSrc: req.body.imgSrc,
            length: req.body.length,
            quantity: req.body.quantity,
            publisher: req.body.publisher,
            description: req.body.description,
        })
            .then(books => res.json(books))
            .catch(err => res.json(err))
    }

    //[DELETE] /book/delete/:id
    deleteBook(req, res) {
        const id = req.params.id;

        Book.findByIdAndDelete({_id: id})
            .then(books => res.json(books))
            .catch(err => res.json(err))
    }
}

module.exports = new BookController