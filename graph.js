        function createList(row,coloumn) {
            var a = [];
            var  b = [];
            row = row + 2;
            while(row >0 ){
                a.push("<div></div>\n");
                row--;
            }
            while(coloumn >=0 ){
                b.push(`<div class="container">${a.join('')}</div>`);
                coloumn--;
            }
            jQuery("#main").append(b.join(''));
        }

        createList(10,12);

        jQuery(document).ready(function(){
            jQuery(":radio").click(function(){

            radioValue = jQuery("input[name='m']:checked").val();

            if (radioValue=="disabled"){
                var obj1 = jQuery(".container");
                var arr = [6,2,3,5,2,5,0,0,2,10,7,4,1];
                obj1.map((index,ele) => {
                    const element1 = jQuery(ele).children();
                    element1.each((index1, ele2) => {
                    index1 = arr[index];
                    index1 = 10 - index1;
                        if (index1 <= element1.length-2){
                            element1.each((a,b) => {
                                if (index1 == 10 ) {
                                        jQuery(b).css("background","none");
                                        jQuery(b).css("pointer-events","none");

                                    }
                                    else if(a >= index1 && a < element1.length-2) {
                                        jQuery(b).css("backgroundColor","green");
                                        jQuery(b).css("pointer-events","none");

                                    }
                                    else if(a <= index1 && a <= element1.length-2) {
                                        jQuery(b).css("visibility","hidden");
                                        jQuery(b).css("pointer-events","none");

                                    }
                                   
                                });
                        } else if(index1 == element1.length-1){
                            jQuery(ele2).text(index);
                        }
                    });
                });
            }else{
                jQuery("body").load(window.location.href+"#main");               
            }
        });  
    }); 


    var obj = jQuery(".container");
                    obj.map((index, ele) => {
                const element = jQuery(ele).children();
                element.each((index1, ele2) => {
                    if (index1 < element.length-2){
                        jQuery(ele2).on("click", function () {
                            
                            element.each((a,b) => {
                                if(a >= index1 && a < element.length-2) {
                                    jQuery(b).css("backgroundColor","green");
                                }
                                else if(a <= index1 && a < element.length-2) {
                                    jQuery(b).css("visibility","hidden");;
                                }
                            })
                        })
                    } else if(index1 == element.length-1){
                        jQuery(ele2).text(index);
                    }
                });
            })
        
