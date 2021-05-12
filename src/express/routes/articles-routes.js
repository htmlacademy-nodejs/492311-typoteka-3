const {Router} = require(`express`);
const articlesRouter = new Router();

articlesRouter.get(`/add`, (req, res) => {
  res.send(`/articles/add`)
});

articlesRouter.get(`/:id`, (req, res) => {
  const id = req.params['id'];
  res.send(`/${id}`)
});

articlesRouter.get(`/category/:id`, (req, res) => {
  const id = req.params['id'];
  res.send(`/category/${id}`)
});

articlesRouter.get(`/edit/:id`, (req, res) => {
  const id = req.params['id'];
  res.send(`/edit/${id}`)
});


module.exports = articlesRouter;