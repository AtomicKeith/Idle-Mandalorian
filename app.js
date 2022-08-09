$(document).ready(function(){
    var logs = 0;
    var money = 0;
    var logPlus = 1;
    var autoLogPlus = 0;
    var autoChopperPrice = 100;
    var logPrice = 1;
    var menu;

    $("#chop").click(function(){
        logs += logPlus;
        changeInventory();
        changeMarket();
    });

    $("#visit").click(function(){
        menu = switchMenu("marketplace");
        changeMarket();
    });

    $("#sell1").click(function(){
        logs --;
        money += logPrice;
        changeInventory();
        changeMarket();
    });

    $("#sell10").click(function(){
        logs -= 10;
        money += logPrice * 10;
        changeInventory();
        changeMarket();
    });

    $("#sell100").click(function(){
        logs -= 100;
        money += logPrice * 100;
        changeInventory();
        changeMarket();
    });

    $("#sell1000").click(function(){
        logs -= 1000;
        money += logPrice * 1000;
        changeInventory();
        changeMarket();
    });

    $("#sellAll").click(function(){
        money += logPrice * logs;
        logs = 0;
        changeInventory();
        changeMarket();
    });

    $("#return").click(function(){
        menu = switchMenu("main");
    });

    function changeInventory(){
        $("#money").html("Money: $" + money);

        if(logs == 1){
            $("#logs").html("You now own " + logs + " log.");
        }else{
            $("#logs").html("You now own " + logs + " logs.");
        };
    }

    function changeMarket(){
        if(logs > 0){
            $("#sellAll").css("display", "block");
        }else{
            $("#sellAll").css("display", "none");
        }
        if(logs >= 1){
            $("#sell1").css("display", "block");
        }else{
            $("#sell1").css("display", "none");
        }
        if(logs >= 10){
            $("#sell10").css("display", "block");
        }else{
            $("#sell10").css("display", "none");
        }
        if(logs >= 100){
            $("#sell100").css("display", "block");
        }else{
            $("#sell100").css("display", "none");
        }
        if(logs >= 1000){
            $("#sell1000").css("display", "block");
        }else{
            $("#sell1000").css("display", "none");
        }
    }

    function switchMenu(menu){
        $(".menus").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu;
    }
});