(function(){
    
    var sayHello = function(){
        console.log('Hello')
    }
    var sayHola = function(){
        console.log('Hola')
    }
    var i = 0;
    var countPrint = function(){
        while(i < 25){
            console.log(i)
            i++;
            countPrint();
        }
    }
    
    module.exports = {
    sayHello,
    sayHola,
    countPrint
};
}())
