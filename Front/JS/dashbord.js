

function TotalAnswer() {
    var Table = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    var Total = 0;
    Total = Table.length;
    document.getElementById("TotalAnswer").innerHTML = Total;
};

function Avgdelay() {
    var Table = [1,2,3,4,5,2,1,4,2,1,1,2,3,4,5,3];
    var Total = 0;
    var Avg = 0;
    for (var i=0; i<Table.length; i++) {
        Total += Table[i];
    }
    Avg = Total / Table.length;
    document.getElementById("Avgdelay").innerHTML = Math.round(Avg*100)/100 + " / 5";
}

function AvgCondition() {
    var Table = [1,2,1,1,1,2,1,2,2,1,5,2,3,5,5,3];
    var Total = 0;
    var Avg = 0;
    for (var i=0; i<Table.length; i++) {
        Total += Table[i];
    }
    Avg = Total / Table.length;
    document.getElementById("AvgCondition").innerHTML = Math.round(Avg *100)/100 + " / 5";
}

function AvgDeliveryPerson() {
    var Table = [1,2,1,1,1,2,1,2,2,1,5,2,3,5,5,3];
    var Total = 0;
    var Avg = 0;
    for (var i=0; i<Table.length; i++) {
        Total += Table[i];
    }
    Avg = Total / Table.length;
    document.getElementById("AvgDeliveryPerson").innerHTML = Math.round(Avg *100)/100 + " / 5";
}

function PageOnload() {
    TotalAnswer();
    Avgdelay();
    AvgCondition();
    AvgDeliveryPerson();
}