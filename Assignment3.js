class restaurantManager{
    constructor(){
        this.restaurantlist = [{
            name : "Mr. Crust",
            city : "Delhi",
            address: "B-90 Ashok Vihar Delhi"
        },
        {
            name: "Spezia Bistro",
            city: "Mumbai",
            address: "R block ,Goregaon Mumbai"
        },
        {
            name: "Foodie",
            city: "Banglore",
            address: "B block, Mallesvaram market"
        },
        {
            name: "Big yellow door",
            city: "Delhi",
            address: "b-90, hudson lane Delhi"

        },
        {
            name: "Zayka",
            city: "Pune",
            address: "b-91,Mahatma Phule Mandai Hinjwadi Pune"
        }]; 
}
     printAllRestaurantNames() {
        console.log("***********RESTAURANT LIST**********");
        for(var i = 0; i<this.restaurantlist.length; i++)
        {
            console.log(this.restaurantlist[i].name);
        }
    }

    filterRestaurantByCity(city_name){
        console.log();

        console.log(`Restaurant list in ${city_name}`);
        this.newlist = this.restaurantlist.filter((data)=>{
        return data.city==city_name
        })

        for(var i = 0; i<this.newlist.length; i++){
            console.log(`name: ${this.newlist[i].name}`);
            console.log(`city: ${this.newlist[i].city}`);
            console.log(`address: ${this.newlist[i].address}`);



        }



    }
    
}

restmanagerobj = new restaurantManager();
restmanagerobj.printAllRestaurantNames();
restmanagerobj.filterRestaurantByCity("Delhi");



    
  