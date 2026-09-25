import React, { useState } from 'react';

// Dữ liệu mẫu đặt ngoài component vì không thay đổi khi thao tác.
const drinks = [
  { id: 1, name: 'Cà phê đen', price: 25000 },
  { id: 2, name: 'Cà phê sữa', price: 30000 },
  { id: 3, name: 'Bạc xỉu', price: 35000 },
  { id: 4, name: 'Trà đào', price: 35000 },
];

// Dùng chung cách hiển thị tiền cho thực đơn và giỏ hàng.
function formatPrice(price) {
  return price.toLocaleString('vi-VN') + ' đ';
}

function App() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');

  // Tổng tiền tính từ giỏ hàng, không cần lưu thêm vào state.
  let totalPrice = 0;
  for (const item of cart) {
    totalPrice += item.price * item.quantity;
  }

  function handleAddDrink(drink) {
    // Dùng giỏ hàng mới nhất và tạo mảng mới, không sửa trực tiếp state.
    setCart((currentCart) => {
      const existingDrink = currentCart.find((item) => item.id === drink.id);

      if (!existingDrink) {
        return [...currentCart, { ...drink, quantity: 1 }];
      }

      return currentCart.map((item) => {
        if (item.id === drink.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
    setMessage('');
  }

  function handleRemoveDrink(drinkId) {
    setCart((currentCart) => currentCart.filter((item) => item.id !== drinkId));
  }

  function handlePlaceOrder() {
    if (cart.length === 0) {
      return;
    }

    setCart([]);
    setMessage('Đặt món demo thành công. Cảm ơn bạn!');
  }

  return (
    <main className="container">
      <header>
        <h1>Huyền 's Coffee</h1>
        <p>Một tách cà phê cho ngày mới.</p>
      </header>

      <section>
        <h2>Thực đơn</h2>
        {drinks.map((drink) => (
          <div className="item" key={drink.id}>
            <div>
              <strong>{drink.name}</strong>
              <p>{formatPrice(drink.price)}</p>
            </div>
            <button onClick={() => handleAddDrink(drink)}>
              Thêm
            </button>
          </div>
        ))}
      </section>

      <section>
        <h2>Giỏ hàng</h2>
        {cart.length === 0 && <p>Chưa có món nào trong giỏ.</p>}

        {cart.map((item) => (
          <div className="item" key={item.id}>
            <div>
              <strong>{item.name} × {item.quantity}</strong>
              <p>{formatPrice(item.price * item.quantity)}</p>
            </div>
            <button className="remove" onClick={() => handleRemoveDrink(item.id)}>
              Xóa
            </button>
          </div>
        ))}

        <p>
          <strong>Tổng tiền: {formatPrice(totalPrice)}</strong>
        </p>
        <button disabled={cart.length === 0} onClick={handlePlaceOrder}>
          Đặt món demo
        </button>
        <p className="message" role="status">{message}</p>
      </section>

      <footer>Bài thực hành React · Không thanh toán thật</footer>
    </main>
  );
}

export default App;
