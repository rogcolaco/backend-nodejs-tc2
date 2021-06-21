module.exports = mongoose => {
    const Car = mongoose.model(
        "car",
        mongoose.Schema({
            model: String,
            color: String,
            plate: String,
            km: Number
        },
        { timestamps: true }
        ));
        return Car;
};