
export default function viewfavourites(req, res, db) {
    const { id } = req.body;

    db('favourites').where('id', '=', id)
        .select('*')
        .then(data => {
            res.json(data)
        })
        .catch(err => res.status(400).json('Error Getting Data'))



}