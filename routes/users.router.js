const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No limit or offset');
  }
});

module.exports = router;



// app.get('/categories/:categoryId',(req,res)=>{
//   const {categoryId} = req.params
//   res.json([
//     {
//       categoryId,
//       category: 'Food',
//       products: []
//     }
//   ])
// })

// app.get('/categories',(req,res)=>{
//   res.json([
//     {
//       category: 'Food',
//       products: []
//     },
//     {
//       category: 'Games',
//       products: []
//     },
//     {
//       category: 'clothes',
//       products: []
//     },
//   ])
// })