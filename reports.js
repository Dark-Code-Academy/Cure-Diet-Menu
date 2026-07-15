//=========================
// رابط Google Apps Script
//=========================

const API_URL = "https://script.google.com/macros/s/AKfycbxNkkrGQAN_9m0pCLTDM5XmSb-uKArbV3HRp5LExjEnyIwFEIRI4TpGNhupf5qnMJTa/exec";

//=========================
// عند فتح الصفحة
//=========================

window.onload = () => {

    // اختيار تاريخ اليوم تلقائياً

    const today = new Date();

    document.getElementById("reportDate").value =
        today.toISOString().split("T")[0];

    loadReport();

};


//=========================
// قراءة البيانات
//=========================

async function loadReport() {

    const response = await fetch(API_URL);

    const orders = await response.json();

    const selectedDate =
        document.getElementById("reportDate").value;

    //----------------------------------------
    // فلترة حسب التاريخ
    //----------------------------------------

    const filtered = orders.filter(order => {

        const orderDate = convertDate(order.date);

        return orderDate == selectedDate;

    });

    //----------------------------------------

    document.getElementById("totalOrders").innerText =
        filtered.length;

    //----------------------------------------

    makeReport(filtered,"breakf","breakfastTable","breakfastCount");

    makeReport(filtered,"lanch","lunchTable","lunchCount");

    makeReport(filtered,"dinner","dinnerTable","dinnerCount");

    makeReport(filtered,"snack","snackTable","snackCount");

    makeReport(filtered,"salad","saladTable","saladCount");

}


//=========================
// تحويل التاريخ
//=========================

function convertDate(text){

    if(!text) return "";

    const match = text.match(/(\d+)‏?\/(\d+)‏?\/(\d+)/);

    if(!match) return "";

    let day = match[1].padStart(2,"0");

    let month = match[2].padStart(2,"0");

    let year = match[3];

    return `${year}-${month}-${day}`;

}



//=========================
// إنشاء التقرير
//=========================

function makeReport(data,column,tableID,countID){

    let result = {};

    data.forEach(item=>{

        let meal = item[column];

        if(!meal) return;

        meal = meal.trim();

        if(meal==="") return;

        if(result[meal])

            result[meal]++;

        else

            result[meal]=1;

    });

    //----------------------------------

    const tbody = document.getElementById(tableID);

    tbody.innerHTML="";

    //----------------------------------

    let total = 0;

    //----------------------------------

    Object.entries(result)

        .sort((a,b)=>b[1]-a[1])

        .forEach(item=>{

            total += item[1];

            tbody.innerHTML += `

            <tr>

                <td>${item[0]}</td>

                <td>${item[1]}</td>

            </tr>

            `;

        });

    //----------------------------------

    document.getElementById(countID).innerText = total;

}
