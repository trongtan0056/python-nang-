var updateBtns = document.getElementsByClassName('update-cart');
for (i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function() {
        var productId = this.dataset.product;
        var action = this.dataset.action;
        console.log('productId:', productId, 'action:', action);  // Sửa lại chỗ này

        // Giả sử user là một biến bạn có sẵn từ template Django hoặc từ một API
        console.log('user:', user);

        // Kiểm tra trạng thái người dùng
        if (user === "AnonymousUser") {
            console.log('chua dang nhap')
        } else {
            updateUserOrder(productId,action)
        }
    });
}

function updateUserOrder(productId,action){
    console.log('Đã đăng nhập')
    var url = '/update_item/'
    fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({'productId': productId, 'action': action})

    })
    .then((response) => {
       return response.json()
    })
    
    .then((data) => {
        console.log('data',data)
        location.reload()
    })
}


