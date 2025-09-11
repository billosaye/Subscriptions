//Create a subscription -> middleware (check renewal date) -> middlware (check for errors) -> next -> controller(create subscription)

const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;
    console.log(error);

    //Mongoose bad Object ID
    if (err.name === "CastError") {
      const message = `Resource not found with id of ${err.value}`;
      error = new ErrorResponse(message, 404);
      error = new Error(message);
      error.statusCode = 404;
    }

    //Mongoose duplicate key
    if (err.code === 11000) {
      const message = `Duplicate field value entered`;
      error = new ErrorResponse(message, 400);
      error = new Error(message);
      error.statusCode = 400;
    }

    //Mongoose validation error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new ErrorResponse(message, 400);
      error = new Error(message);
      error.statusCode = 400;
    }

    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || "Server Error",
    });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;