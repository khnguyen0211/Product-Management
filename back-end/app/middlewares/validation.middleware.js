//kiểm tra người dùng có bỏ trống trường nào hay không
const checkEmpty = (req, res, next) => {
    const {name, amount, price, sale} = req.body;
    if(name && amount && price) {
        if(!sale) {
            sale = 0;
        }
        next();
    } else {
        res.send("Error");
    }
}
//kiểm tra các giá trị số như amount, price > 0 và 0 <= sale <= 1
const checkValueNumber = (req, res, next) => {
    const {amount, price, sale} = req.body;
    if(amount > 0 && price > 0 && sale > 0) {
        next();
    } else {
        res.send("Error");
    }
}

module.exports = {checkEmpty, checkValueNumber}