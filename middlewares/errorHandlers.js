exports.error500 = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        status: "Somrthing Broke!",
        errorCode: err.status || 500,
        errors: err.message,
    });
};

exports.error404 = (req, res, next) => {
    res.status(404).json({
        status: "Request fail!",
        errorCode: 404,
        errors: "Are you lost? There's no such page!"
    });
};