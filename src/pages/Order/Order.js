import Header from "../../share_cpn/header/Header";
import "./Order.scss";
import OrderListComponent from "./order_components/all_order/OrderList";

// Màn hình Đơn hàng.
function OrderPage() {
  return (
    <div>
      <Header />
      <OrderListComponent />
    </div>
  );
}

export default OrderPage;
