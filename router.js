const express = require('express');
const router = express.Router();

router
.get('/get', (req, res, next) => {
    console.log('GET /v1/get')
    res.json({message: 'In get route'})
})
.post('/post', (req, res, next) => {
    console.log('POST /v1/post')
    res.json({message: 'In post route'})
})
.put('/put', (req, res, next) => {
    console.log('PUT /v1/put')
    res.json({message: 'In put route'})
})
.delete('/delete', (req, res, next) => {
    console.log('DELETE /v1/delete')
    res.json({message: 'In delete route'})
});

module.exports = router;
