class Vehicle{
    constructor (brand,price){
        this.brand=brand;
        this.price=price;
    }
    set details(discount){
        this.brand=(this.brand+" "+discount).toUpperCase();
        this.price=this.price-discount;
    }
    get details(){
        return this.brand+" "+this.price;
    }
}
veh=new Vehicle('Lamborghini','10000000');
console.log(veh);
veh.details='10000';
console.log(veh.details);