var mongoose=require("mongoose");
var dbURI='mongodb://localhost/mekanbul';
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+"adresindeki veritabanına bağlandı ")
});
mongoose.connection.on("error",function(){
    console.log(dbURI+"bağlantı sağlanmadı ")
});
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+"bağlantı kesildi ")
});