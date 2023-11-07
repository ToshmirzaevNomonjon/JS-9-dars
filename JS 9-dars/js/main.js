let user = [
    {
        id: "00001",
        login: "MDK91",
        password: "12345",
        userName: "Toshmirzaevvvv"
    }
];
let payArray = [];
$(document).ready(function (){
    let kirishSoni = 0;
    let payId = 0;
    let kassirId = '';
    $("#startModal").modal("show");
    $("#startBtn").click(function (){
        let login = $("#login").val();
        let password = $("#password").val();
        if (login !="" && password !=""){
            let topildi = false;
            user.forEach(function (item){
                if (login == item.login){
                    topildi = true;
                    if (password == item.password){
                        $("#workingBlock").toggleClass("d-none");
                        $("#kassir").html(item.userName);
                        $("#startModal").modal("hide");
                        topildi = true;
                        kassirId = item.id;
                    }
                }
            });
            if (!topildi){
                if (kirishSoni >= 2){
                    $("#startModal").modal("hide");
                    alert("Tizim bloklandi!")
                }
                alert("Login yoki parol xato!")
                kirishSoni++;
            }
        }
        else{
            alert("login va parol qatorlarini toldiring!")
        }
    });
    $("#addPay").click(function (){
        let payUser = $("#payUser").val();
        let payUserId = $("#payUserId").val();
        let payOrder = $("#payOrder").val();
        let paySum = $("#paySum").val();
        let payType = $("#payType").val();
        let payTarget = $("#payTarget").val();
        let payDate = $("#payDate").val();
        payId++;

        payArray.push(
            {
                id: payId,
                userId: kassirId,
                payUser: payUser,
                payUserId: payUserId,
                payOrder: payOrder,
                paySum: paySum,
                payType: payType,
                payTarget: payTarget,
                payDate: payDate,
            }
        );
        let list = '';
        payArray.forEach(function (item){
            list +='<tr>' +
                        '<td>'+ item.id +'</td>' +
                        '<td>'+ item.user +'</td>' +
                        '<td>'+ item.paySum +'</td>' +
                        '<td>'+ item.payOrder +'</td>' +
                        '<td>' +
                            '<span class="badge badge-success">'+ item.payTarget +'</span>' +
                        '</td>' +
                        '<td>'+ item.payDate +'</td>' +
                        '<td>' +
                            '<button type="button" class="btn btn-primary" onclick="edit('+item.id+') ">Edit</button>' +
                            '<button type="button" class="btn btn-danger" onclick="remove('+item.id+') ">Remove</button>' +
                       '</td>' +
                    '</tr>'
        });
        $("#tbody").html(list)
    })
});



