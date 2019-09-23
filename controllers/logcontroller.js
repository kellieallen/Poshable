const router = require('express').Router();
const Log = require('../db').import('../models/log');
const validateSession = require('../middleware/validate-session');



//GET ALL LOGS
router.get('/', validateSession, (req, res) => {

    Log.findAll({ 
      
        where: { 
            owner: req.user.id
         }})

        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({
            error: err
            
        }))
     
    
})

// CREATE LOG
router.post('/create', validateSession, (req, res) => {

    const logFromRequest = {
        item: req.body.log.item,
        brand: req.body.log.brand,
        description: req.body.log.description,
        purchasePrice: req.body.log.purchasePrice,
        soldPrice: req.body.log.soldPrice,
        forSaleDate: req.body.log.forSaleDate,
        soldDate: req.body.log.soldDate,
        inventory: req.body.log.inventory,
        owner: req.user.id


    }

    Log.create(logFromRequest)
        .then(log => res.status(200).json(log))
        .catch(err => res.json(req.errors))

})


// TO UPDATE, FIND ONE LOG BY NAME
router.get('/:id', (req, res) => {
  Log.findOne({ 
      
    where: { 
        id: req.params.id
     }})

    .then(log => res.status(200).json(log))
    .catch(err => res.status(500).json({
        error: err
    }))

})

// UPDATE LOG INFO

router.put('/update/:id', (req, res) => {

  Log.update(req.body.log, { 
      where: { 
          id: req.params.id }})

    .then(log => res.status(200).json(log))
    .catch(err => res.json({
        error: err
    }))
})

//DELETE LOG


router.delete('/delete/:id', (req, res) => {

    Log.destroy({


    where: {
        id: req.params.id } } )

        .then(log => res.status(200).json(log))
        .catch(err => res.json({
            error: err
        }))
    
    })




module.exports = router;

