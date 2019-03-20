function bind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}

var user = {
    Name: "Алег",
    age: 85,
    pension: 65,
    toPension: function() {
        if (this.age < this.pension) {
            alert('До пенсии ' + (this.pension - this.age) + ' лет');
        } else {
            alert('Вы счастливый человек, ' + user.Name)
        }
    }
};

(bind(user.toPension,user))();
