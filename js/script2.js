window.addEventListener("load", function () {
    //TIN TỨC
    let news = this.document.querySelectorAll(".main-news:not(:first-child)");
    for (let n of news)
        n.style.display = "none";

    // let others = this.document.querySelectorAll("");
    
    let book = this.document.querySelectorAll("#btn-ser");
    let form = this.document.querySelector(".form");
    for (let b of book)
        b.addEventListener('click', function () {
            form.setAttribute("style", "display: block;");
        });
    
    let cancel = this.document.querySelector("button#btn-form-cancel");
    cancel.addEventListener('click', function () {
        form.style.display = "none";
     });

    let contents = this.document.querySelectorAll(".contents-ser > div:not(:first-child)");
    for (let c of contents)
        c.setAttribute("style", "display: none;");

    let menuSer = this.document.querySelectorAll("ul.menu-service > li > a");
    for (let x of menuSer)
        x.addEventListener('click', function () {
            event.preventDefault();
            form.style.display = "none";    

            let ac = document.querySelectorAll(".menu-service > li");
            for (let i of ac)
                i.classList.remove("active");
            this.parentElement.classList.add("active");
            
            let content = document.querySelectorAll(".contents-ser > div");
            for (let x of content)
                x.style.display = "none";
            
            let h = this.getAttribute("href").slice(1,);
            let show = document.getElementById(h);
            show.style.display = "flex";
        });
    
    //lọc bill
    let filter = this.document.querySelectorAll(".filter button");
    for (let f of filter)
        f.onclick = function () {
            let id = this.getAttribute("id");
            let paids = document.getElementsByClassName("bill");
            for (let p of paids)
                p.style.display = "none";
            let bills = document.getElementsByClassName(id);
            for (let b of bills)
                b.style.display = "block";
        }
    
    let payment = this.document.querySelector(".payment-methods");
    //ẩn phương thức thanh toán
    payment.style.display = "none";
    let pay = this.document.querySelectorAll("#pay");
    for (let p of pay)
        p.addEventListener('click', function () {
            //hiện pttt
            payment.style.display = "flex"
            //nhấn hủy ẩn
            let cancelPay = document.getElementById("cancel-pay");
            cancelPay.onclick = function () {
                payment.style.display = "none";
            }
            //chọn phương thức thanh toán
            let payMent = document.querySelectorAll(".payment-methods a");
            let pa = document.querySelectorAll(".payment-method");
            for (let pay of payMent)
                pay.addEventListener('click', function () {
                    event.preventDefault();
                    for (let a of pa)
                        a.classList.remove("choose");
                    this.parentElement.classList.add("choose");
                });
            //xác nhận thanh toán
            let submit = document.getElementById("submit-pay");
            submit.onclick = function () {
                let sub = document.querySelector(".choose");
                if (sub == null)
                    alert("Chưa chọn phương thức thanh toán!");
                else {
                    alert("Thanh toán thành công");
                    payment.style.display = "none";
                    p.parentElement.remove();
                }
            }
        });
    
    
});