export default function addtofav(req, res, db) {
    const { id, title, description, author, articleUrl } = req.body;
    
    db('favourites').insert({
        id: id,
        title: title,
        description: description,
        author: author,
        articleurl: articleUrl
    })
        .then(data => {
            res.json(data)
        })
        .catch(err => res.status(400).json(err))
}