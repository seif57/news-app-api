export default function deletefavourite(req, res, db) {
    const { id } = req.body;
    
    db('favourites')
    .where('article_id',id)
    .del()
        .then(data => {
            res.json(data)
        })
        .catch(err => res.status(400).json(err))
}