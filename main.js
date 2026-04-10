






function submit() {
    var phone_numper = "96566473580";

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }
    var day = "السبت";
    var breakf = document.getElementById("break").value;
    var lanch = document.getElementById("lanch").value;
    var dinner = document.getElementById("dinner").value;
    var snack = document.getElementById("snack").value;
    var salad = document.getElementById("salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    var order = {
        day : day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    var message =
        "( يوم السبت )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}
function submit_new1() {
    var phone_numper = "96566473580";

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }
    var day = "الاحد";
    var breakf = document.getElementById("new1-break").value;
    var lanch = document.getElementById("new1-lanch").value;
    var dinner = document.getElementById("new1-dinner").value;
    var snack = document.getElementById("new1-snack").value;
    var salad = document.getElementById("new1-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ في localStorage
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 إرسال واتساب
    var message =
        "( يوم الأحد )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();
}
function submit_new2() {
    var phone_numper = "96566473580";

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }
    var day = "الاثنين";

    var breakf = document.getElementById("new2-break").value;
    var lanch = document.getElementById("new2-lanch").value;
    var dinner = document.getElementById("new2-dinner").value;
    var snack = document.getElementById("new2-snack").value;
    var salad = document.getElementById("new2-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ في localStorage
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 إرسال واتساب
    var message =
        "( يوم الاثنين )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();
}

function submit_new3() {
    var phone_numper = "96566473580";

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }
    var day = "الثلاثاء";
    var breakf = document.getElementById("new3-break").value;
    var lanch = document.getElementById("new3-lanch").value;
    var dinner = document.getElementById("new3-dinner").value;
    var snack = document.getElementById("new3-snack").value;
    var salad = document.getElementById("new3-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الثلاثاء )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();
}

function submit_new4() {
    var phone_numper = "96566473580";

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }
    var day = "الاربعاء";
    var breakf = document.getElementById("new4-break").value;
    var lanch = document.getElementById("new4-lanch").value;
    var dinner = document.getElementById("new4-dinner").value;
    var snack = document.getElementById("new4-snack").value;
    var salad = document.getElementById("new4-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الاربعاء )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();
}

function submit_new5() {
    var phone_numper = "96566473580"; // رقم الهاتف بدون +

    // 📝 جمع بيانات العميل
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) { // تحقق إن الاسم مش فاضي
        alert("برجاء ملئ حقل الاسم");

        // نركز على الحقل
        nameField.focus();

        // إذا كان داخل scrollable div
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

        // نعطيه حدود قصيرة ك highlight مؤقت
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);

        return;
    }
    var day = "الخميس";
    var breakf = document.getElementById("new5-break").value;
    var lanch = document.getElementById("new5-lanch").value;
    var dinner = document.getElementById("new5-dinner").value;
    var snack = document.getElementById("new5-snack").value;
    var salad = document.getElementById("new5-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    var order = {
        date: day,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    var message =
        "( يوم الخميس )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}

function submit_new6() {
    var phone_numper = "96566473580";

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }
    var day = "الجمعة";

    var breakf = document.getElementById("new6-break").value;
    var lanch = document.getElementById("new6-lanch").value;
    var dinner = document.getElementById("new6-dinner").value;
    var snack = document.getElementById("new6-snack").value;
    var salad = document.getElementById("new6-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الجمعة )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();
}



function n1() {
    var phone_numper = "96566473580";

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }
    var day = "السبت";
    var breakf = document.getElementById("n1-break").value;
    var lanch = document.getElementById("n1-lanch").value;
    var dinner = document.getElementById("n1-dinner").value;
    var snack = document.getElementById("n1-snack").value;
    var salad = document.getElementById("n1-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    var order = {
        day : day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    var message =
        "( يوم السبت )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}

function n2() {
    var phone_numper = "96566473580";

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }
    var day = "الاحد";
    var breakf = document.getElementById("n2-break").value;
    var lanch = document.getElementById("n2-lanch").value;
    var dinner = document.getElementById("n2-dinner").value;
    var snack = document.getElementById("n2-snack").value;
    var salad = document.getElementById("new1-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ في localStorage
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 إرسال واتساب
    var message =
        "( يوم الأحد )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();
}
function n3() {
    var phone_numper = "96566473580";

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }
    var day = "الاثنين";

    var breakf = document.getElementById("n3-break").value;
    var lanch = document.getElementById("n3-lanch").value;
    var dinner = document.getElementById("n3-dinner").value;
    var snack = document.getElementById("n3-snack").value;
    var salad = document.getElementById("n3-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ في localStorage
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 إرسال واتساب
    var message =
        "( يوم الاثنين )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();
}

function n4() {
    var phone_numper = "96566473580";

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }
    var day = "الثلاثاء";
    var breakf = document.getElementById("n4-break").value;
    var lanch = document.getElementById("n4-lanch").value;
    var dinner = document.getElementById("n4-dinner").value;
    var snack = document.getElementById("n4-snack").value;
    var salad = document.getElementById("n4-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الثلاثاء )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();
}

function n5() {
    var phone_numper = "96566473580";

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }
    var day = "الاربعاء";
    var breakf = document.getElementById("n5-break").value;
    var lanch = document.getElementById("n5-lanch").value;
    var dinner = document.getElementById("n5-dinner").value;
    var snack = document.getElementById("n5-snack").value;
    var salad = document.getElementById("n5-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الاربعاء )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();
}

function n6() {
    var phone_numper = "96566473580"; // رقم الهاتف بدون +

    // 📝 جمع بيانات العميل
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) { // تحقق إن الاسم مش فاضي
        alert("برجاء ملئ حقل الاسم");

        // نركز على الحقل
        nameField.focus();

        // إذا كان داخل scrollable div
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

        // نعطيه حدود قصيرة ك highlight مؤقت
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);

        return;
    }
    var day = "الخميس";
    var breakf = document.getElementById("n6-break").value;
    var lanch = document.getElementById("n6-lanch").value;
    var dinner = document.getElementById("n6-dinner").value;
    var snack = document.getElementById("n6-snack").value;
    var salad = document.getElementById("n6-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    var order = {
        date: day,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    var message =
        "( يوم الخميس )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}

function n7() {
    var phone_numper = "96566473580";

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }
    var day = "الجمعة";

    var breakf = document.getElementById("n7-break").value;
    var lanch = document.getElementById("n7-lanch").value;
    var dinner = document.getElementById("n7-dinner").value;
    var snack = document.getElementById("n7-snack").value;
    var salad = document.getElementById("n7-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الجمعة )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();
}



function keto1() {
    var phone_numper = "96566473580"; // بدون +

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }

    // 📝 جمع البيانات من باقي الحقول
        var day = "السبت";
    var breakf = document.getElementById("keto1-break").value;
    var lanch = document.getElementById("keto1-lanch").value;
    var dinner = document.getElementById("keto1-dinner").value;
    var snack = document.getElementById("keto1-snack").value;
    var salad = document.getElementById("keto1-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر في localStorage
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message = 
        "( يوم السبت )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();

    // 🧹 تفريغ الحقول بعد الإرسال
    nameField.value = "";
    document.getElementById("keto1-break").value = "";
    document.getElementById("keto1-lanch").value = "";
    document.getElementById("keto1-dinner").value = "";
    document.getElementById("keto1-snack").value = "";
    document.getElementById("keto1-salad").value = "";
}

function keto2() {
    var phone_numper = "96566473580"; // بدون +

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }

    // 📝 جمع البيانات من باقي الحقول
        var day = "الاحد";
    var breakf = document.getElementById("keto2-break").value;
    var lanch = document.getElementById("keto2-lanch").value;
    var dinner = document.getElementById("keto2-dinner").value;
    var snack = document.getElementById("keto2-snack").value;
    var salad = document.getElementById("keto2-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر في localStorage
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الأحد )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();

    // 🧹 تفريغ الحقول بعد الإرسال
    nameField.value = "";
    document.getElementById("keto2-break").value = "";
    document.getElementById("keto2-lanch").value = "";
    document.getElementById("keto2-dinner").value = "";
    document.getElementById("keto2-snack").value = "";
    document.getElementById("keto2-salad").value = "";
}


function keto3() {
    var phone_numper = "96566473580"; // بدون +

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }

    // 📝 جمع البيانات من باقي الحقول
        var day = "الاثنين";

    var breakf = document.getElementById("keto3-break").value;
    var lanch = document.getElementById("keto3-lanch").value;
    var dinner = document.getElementById("keto3-dinner").value;
    var snack = document.getElementById("keto3-snack").value;
    var salad = document.getElementById("keto3-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر في localStorage
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الاثنين )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();

    // 🧹 تفريغ الحقول بعد الإرسال
    nameField.value = "";
    document.getElementById("keto3-break").value = "";
    document.getElementById("keto3-lanch").value = "";
    document.getElementById("keto3-dinner").value = "";
    document.getElementById("keto3-snack").value = "";
    document.getElementById("keto3-salad").value = "";
}


function keto4() {
    var phone_numper = "96566473580"; // بدون +

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }

    // 📝 جمع البيانات من باقي الحقول
        var day = "الثلاثاء";

    var breakf = document.getElementById("keto4-break").value;
    var lanch = document.getElementById("keto4-lanch").value;
    var dinner = document.getElementById("keto4-dinner").value;
    var snack = document.getElementById("keto4-snack").value;
    var salad = document.getElementById("keto4-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر في localStorage
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الثلاثاء )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();

    // 🧹 تفريغ الحقول بعد الإرسال
    nameField.value = "";
    document.getElementById("keto4-break").value = "";
    document.getElementById("keto4-lanch").value = "";
    document.getElementById("keto4-dinner").value = "";
    document.getElementById("keto4-snack").value = "";
    document.getElementById("keto4-salad").value = "";
}

function keto5() {
    var phone_numper = "96566473580"; // بدون +

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }

    // 📝 جمع البيانات من باقي الحقول
        var day = "الاربعاء";

    var breakf = document.getElementById("keto5-break").value;
    var lanch = document.getElementById("keto5-lanch").value;
    var dinner = document.getElementById("keto5-dinner").value;
    var snack = document.getElementById("keto5-snack").value;
    var salad = document.getElementById("keto5-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر في localStorage
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الأربعاء )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();

    // 🧹 تفريغ الحقول بعد الإرسال
    nameField.value = "";
    document.getElementById("keto5-break").value = "";
    document.getElementById("keto5-lanch").value = "";
    document.getElementById("keto5-dinner").value = "";
    document.getElementById("keto5-snack").value = "";
    document.getElementById("keto5-salad").value = "";
}

function keto6() {
    var phone_numper = "96566473580"; // بدون +

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }

    // 📝 جمع البيانات من باقي الحقول
        var day = "الخميس";

    var breakf = document.getElementById("keto6-break").value;
    var lanch = document.getElementById("keto6-lanch").value;
    var dinner = document.getElementById("keto6-dinner").value;
    var snack = document.getElementById("keto6-snack").value;
    var salad = document.getElementById("keto6-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر في localStorage
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الخميس )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();

    // 🧹 تفريغ الحقول بعد الإرسال
    nameField.value = "";
    document.getElementById("keto6-break").value = "";
    document.getElementById("keto6-lanch").value = "";
    document.getElementById("keto6-dinner").value = "";
    document.getElementById("keto6-snack").value = "";
    document.getElementById("keto6-salad").value = "";
}

function sugar1() {
    var phone_numper = "96566473580"; // بدون +

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }

    // 📝 جمع البيانات من باقي الحقول
        var day = "السبت";

    var breakf = document.getElementById("sugar1-break").value;
    var lanch = document.getElementById("sugar1-lanch").value;
    var dinner = document.getElementById("sugar1-dinner").value;
    var snack = document.getElementById("sugar1-snack").value;
    var salad = document.getElementById("sugar1-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر في localStorage
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم السبت )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();

    // 🧹 تفريغ الحقول بعد الإرسال
    nameField.value = "";
    document.getElementById("sugar1-break").value = "";
    document.getElementById("sugar1-lanch").value = "";
    document.getElementById("sugar1-dinner").value = "";
    document.getElementById("sugar1-snack").value = "";
    document.getElementById("sugar1-salad").value = "";
}

function sugar2() {
    var phone_numper = "96566473580"; // بدون +

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }

    // 📝 جمع البيانات من باقي الحقول
        var day = "الاحد";

    var breakf = document.getElementById("sugar2-break").value;
    var lanch = document.getElementById("sugar2-lanch").value;
    var dinner = document.getElementById("sugar2-dinner").value;
    var snack = document.getElementById("sugar2-snack").value;
    var salad = document.getElementById("sugar2-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر في localStorage
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الأحد )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();

    // 🧹 تفريغ الحقول بعد الإرسال
    nameField.value = "";
    document.getElementById("sugar2-break").value = "";
    document.getElementById("sugar2-lanch").value = "";
    document.getElementById("sugar2-dinner").value = "";
    document.getElementById("sugar2-snack").value = "";
    document.getElementById("sugar2-salad").value = "";
}

function sugar3() {
    var phone_numper = "96566473580"; // بدون +

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }

    // 📝 جمع البيانات من باقي الحقول
        var day = "الاثنين";

    var breakf = document.getElementById("sugar3-break").value;
    var lanch = document.getElementById("sugar3-lanch").value;
    var dinner = document.getElementById("sugar3-dinner").value;
    var snack = document.getElementById("sugar3-snack").value;
    var salad = document.getElementById("sugar3-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر في localStorage
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الاثنين )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();

    // 🧹 تفريغ الحقول بعد الإرسال
    nameField.value = "";
    document.getElementById("sugar3-break").value = "";
    document.getElementById("sugar3-lanch").value = "";
    document.getElementById("sugar3-dinner").value = "";
    document.getElementById("sugar3-snack").value = "";
    document.getElementById("sugar3-salad").value = "";
}

function sugar4() {
    var phone_numper = "96566473580"; // بدون +

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }

    // 📝 جمع البيانات
        var day = "الثلاثاء";

    var breakf = document.getElementById("sugar4-break").value;
    var lanch = document.getElementById("sugar4-lanch").value;
    var dinner = document.getElementById("sugar4-dinner").value;
    var snack = document.getElementById("sugar4-snack").value;
    var salad = document.getElementById("sugar4-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الثلاثاء )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();

    // 🧹 تفريغ الحقول
    nameField.value = "";
    document.getElementById("sugar4-break").value = "";
    document.getElementById("sugar4-lanch").value = "";
    document.getElementById("sugar4-dinner").value = "";
    document.getElementById("sugar4-snack").value = "";
    document.getElementById("sugar4-salad").value = "";
}

function sugar5() {
    var phone_numper = "96566473580"; // بدون +

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }

    // 📝 جمع البيانات
        var day = "الاربعاء";

    var breakf = document.getElementById("sugar5-break").value;
    var lanch = document.getElementById("sugar5-lanch").value;
    var dinner = document.getElementById("sugar5-dinner").value;
    var snack = document.getElementById("sugar5-snack").value;
    var salad = document.getElementById("sugar5-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الأربعاء )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();

    // 🧹 تفريغ الحقول
    nameField.value = "";
    document.getElementById("sugar5-break").value = "";
    document.getElementById("sugar5-lanch").value = "";
    document.getElementById("sugar5-dinner").value = "";
    document.getElementById("sugar5-snack").value = "";
    document.getElementById("sugar5-salad").value = "";
}

function sugar6() {
    var phone_numper = "96566473580"; // بدون +

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }

    // 📝 جمع البيانات
        var day = "الخميس";

    var breakf = document.getElementById("sugar6-break").value;
    var lanch = document.getElementById("sugar6-lanch").value;
    var dinner = document.getElementById("sugar6-dinner").value;
    var snack = document.getElementById("sugar6-snack").value;
    var salad = document.getElementById("sugar6-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الخميس )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();

    // 🧹 تفريغ الحقول
    nameField.value = "";
    document.getElementById("sugar6-break").value = "";
    document.getElementById("sugar6-lanch").value = "";
    document.getElementById("sugar6-dinner").value = "";
    document.getElementById("sugar6-snack").value = "";
    document.getElementById("sugar6-salad").value = "";
}

function sugar7() {
    var phone_numper = "96566473580"; // بدون +

    // 📝 التحقق من حقل الاسم
    var nameField = document.getElementById("customer_name");
    var name = nameField.value;
    if (!name.trim()) {
        alert("برجاء ملئ حقل الاسم");
        nameField.focus();
        nameField.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        nameField.style.border = "2px solid red";
        setTimeout(() => { nameField.style.border = ""; }, 2000);
        return;
    }

    // 📝 جمع البيانات
    var day = "الجمعة";

    var breakf = document.getElementById("sugar7-break").value;
    var lanch = document.getElementById("sugar7-lanch").value;
    var dinner = document.getElementById("sugar7-dinner").value;
    var snack = document.getElementById("sugar7-snack").value;
    var salad = document.getElementById("sugar7-salad").value;

    var now = new Date();
    var dateTime = now.toLocaleString();

    // 📦 حفظ الأوردر
    var order = {
        day: day,
        date: dateTime,
        name: name,
        breakf: breakf,
        lanch: lanch,
        dinner: dinner,
        snack: snack,
        salad: salad
    };

    var orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // 📤 رسالة واتساب
    var message =
        "( يوم الجمعة )\n" +
        "الاسم : " + name + "\n" +
        "الفطار : " + breakf + "\n" +
        "الغداء : " + lanch + "\n" +
        "العشاء : " + dinner + "\n" +
        "الاسناك : " + snack + "\n" +
        "السلطة : " + salad;

    var url = "https://wa.me/" + phone_numper + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank").focus();

    // 🧹 تفريغ الحقول
    nameField.value = "";
    document.getElementById("sugar7-break").value = "";
    document.getElementById("sugar7-lanch").value = "";
    document.getElementById("sugar7-dinner").value = "";
    document.getElementById("sugar7-snack").value = "";
    document.getElementById("sugar7-salad").value = "";
}


