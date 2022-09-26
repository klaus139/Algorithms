//converts rgb decimals to hex
//The rgb function is incomplete. 
//Complete it so that passing in RGB decimal values will result in a hexadecimal representation 
//being returned. Valid decimal values for RGB are 0 - 255. 
//Any values that fall out of that range must be rounded to the closest valid value.

//Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

//The following are examples of expected output values:


function rgb (r,g,b){
    var rgb = [r,g,b];
    for(var i = 0; i < rgb.length; i++){
        if(rgb[i] > 255){
        rgb[i] = 255;
        }else if(rgb[i] < 0){
        rgb[i] = 0;
        }
    }
    return rgb.map(function(x){
        //console.log('0' + x.toString(16).toUpperCase());
        console.log('0' + x.toString(16).toUpperCase());
        return ( '0' + x.toString(16).toUpperCase()).slice(-2);
    }).join('');
}
console.log(rgb(252,0,500));
    