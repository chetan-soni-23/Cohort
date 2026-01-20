class mobileshop{
   constructor(){
    this.mobiles=[];
   }

    addMobile(mobile){
        this.mobiles.push(mobile);
    }
    listMobiles(){
        this.mobiles.forEach(mobile=>{
            console.log(`Brand: ${mobile.brand}, Model : ${mobile.model}, Price: ${mobile.price}`);
            mobile.sims.forEach(sim=>{
                console.log(`   Sim Carrier: ${sim.carrier}, Balance: ${sim.balance}`);
            })
        })
    }
    removeMobile(mobile){
        const index=this.mobiles.indexOf(mobile);
        if(index>-1){
            this.mobiles.splice(index,1);
        }
    }
}

class mobile{
     constructor(brand,model,price){
        this.brand=brand;
        this.model=model;
        this.price=price;
        this.sims=[];
        //logic for unique id
    }

    getMobileInfo(){
        console.log(`Brand: ${this.brand}, Model : ${this.model}, Price: ${this.price}`);
    }
    insertSim(sim){
        if(this.sims.length>=2){
            console.log("Cannot insert more than 2 sims");
            return;
        }
        else{
            this.sims.push(sim);
        }
    }
}

class sim{
        constructor(carrier,balance){
            this.carrier=carrier;
            this.balance=balance;
        }

        addBalance(amount){
            this.balance+=amount;
        }

        getSimInfo(){
            console.log(`Carrier: ${this.carrier}, Balance: ${this.balance}`);
        }
}

let GadaElectronics=new mobileshop();

let mobile1=new mobile("Apple","iPhone 13",799);
let sim1=new sim("Verizon",50);
mobile1.insertSim(sim1);
GadaElectronics.addMobile(mobile1);

let mobile2=new mobile("Samsung","Galaxy S21",699);
let sim2=new sim("AT&T",30);
mobile2.insertSim(sim2);
let sim3=new sim("T-Mobile",20);
mobile2.insertSim(sim3);
GadaElectronics.addMobile(mobile2);

