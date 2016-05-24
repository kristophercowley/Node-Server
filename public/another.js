(function(){
    var test1 = function(){
        console.log('Test One Functioning')
    }
     var test2 = function(){
        console.log('Test Two Functioning')
    }
       var test3 = function(){
        console.log('Test Three Functioning')
    }
    
    
    module.exports = {
        test1,
        test2,
        test3
    }
}())