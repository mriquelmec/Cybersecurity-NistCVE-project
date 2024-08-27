const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({"message":"Ups... algo malo pasó."});
}

export {errorHandler}