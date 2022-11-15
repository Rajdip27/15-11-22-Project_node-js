const { cheak } = require('express-validator');

exports.store=[
    
    cheak('title', "Invalid title").isEmpty().trim(),
    cheak('details', "Invalid details").isEmpty().trim(),
    check('image', "Invalid image".isEmpty),
]

exports.update=[
    cheak('title', "Invalid title").isEmpty().trim(),
    cheak('details', "Invalid details").isEmpty().trim(),
    check('image', "Invalid image".isEmpty)
]