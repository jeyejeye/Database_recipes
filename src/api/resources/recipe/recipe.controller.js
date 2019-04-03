import Recipe from './recipe.model';

const getAll = model => (req, res) => {
    return model.findAll({})
        .then(entities => res.status(200).json(entities))
        .catch(error => res.status(500).json(error))
};

export default {
    getAll: getAll(Recipe)
}