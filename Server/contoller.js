module.exports = {
create: (req, res) => {
    const dbInstance = req.app.get('db');
    const { name, price, imgurl } = req.body;
    dbInstance.create_product(name, price, imgurl)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(501).send({ errorMessage: "Oh no, technical difficulties, We're working on it!"  });
        console.log(err)
      });
  },
  getAll: (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.get_inventory()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(501).send({ errorMessage: "Oh no, technical difficulties, We're working on it!"  });
        console.log(err)
      });
  },
  delete: (req, res) => {
    const dbInstance = req.app.get('db');
    const { id } = req.params;
    dbInstance.delete_product(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(501).send({ errorMessage: "Oh no, technical difficulties, We're working on it!" });
        console.log(err)
      });
  }

}