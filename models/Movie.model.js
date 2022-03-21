const { Schema } = require("mongoose");

const Movie = new Schema(() => {
    title = String,
    director = String,
    stars = [String],
    image = String,
    description = String,
    showtimes = [String]
})

export { Movie }