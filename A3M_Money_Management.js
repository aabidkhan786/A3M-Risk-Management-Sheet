function position_sizing(){
    var myrisk = document.getElementById('_riskpercentage').value;
    var mycapital = document.getElementById("_capital").value;

    var risking = (myrisk * mycapital) / 100;
    document.getElementById('risk_amt').value = risking;

    var myrew = document.getElementById('_rewardpercentage').value;
    var mycapital = document.getElementById("_capital").value;

    var rew = (myrew * mycapital) / 100;
    document.getElementById('risk_amt1').value = rew;

    var buy = document.getElementById("buy_price").value;
    var sl = document.getElementById("bsl_price").value;

    var myrisk1 = document.getElementById('_riskpercentage').value;
    var myrew1 = document.getElementById('_rewardpercentage').value;

    var sellb_price = (parseFloat(buy) + ((myrew1/myrisk1)*(buy-sl))).toFixed(2);

    document.getElementById("sell1_price").value = sellb_price;

    var myrisk = document.getElementById('_riskpercentage').value;
    var mycapital = document.getElementById("_capital").value;
    var buy = document.getElementById("buy_price").value;
    var sl = document.getElementById("bsl_price").value;

    var buy_quantity = parseFloat(((mycapital*myrisk)/100) / (buy - sl)).toFixed(2);

    document.getElementById("buy_quant").value = buy_quantity;

    // Javascript for sell side function

    var sell = document.getElementById("sell_price").value;
    var sl1 = document.getElementById("ssl_price").value;

    var myrisk1 = document.getElementById('_riskpercentage').value;
    var myrew1 = document.getElementById('_rewardpercentage').value;

    var buys_price = (parseFloat(sell) - ((myrew1/myrisk1)*(sl1 - sell))).toFixed(2);

    document.getElementById("buy1_price").value = buys_price;

    var myrisk = document.getElementById('_riskpercentage').value;
    var mycapital = document.getElementById("_capital").value;
    var sell_qty = document.getElementById("sell_price").value;
    var sl11 = document.getElementById("ssl_price").value;

    var sell_quantity = parseFloat(((mycapital*myrisk)/100) / (sl11 - sell_qty)).toFixed(2);

    document.getElementById("sell_quant").value = sell_quantity;
}