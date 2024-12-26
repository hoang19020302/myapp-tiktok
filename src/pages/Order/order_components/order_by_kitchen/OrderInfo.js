import { Button } from "antd";
import "./OrderInfo.scss";

// Component danh sách đơn hàng, bên trái của popup Chi tiết đơn hàng.
function OrderInfo({ data }) {
  return (
    <div className="order-info-wrapper">
      <div className="order-info-container">
        {/* Header cua order info (row), bao gom logo, ten-sdt khach hang, va tong so tien */}
        <div className="order-info-header">
          <div className="left-header">
            <img className="logo" src="images/small_logo.svg" alt="" />
            <div className="customer-info">
              {data.name} - {data.phone}
            </div>
          </div>
          <div className="right-header">
            <div className="price-info">{data.price}</div>
          </div>
        </div>
        {/* Thong tin mon an, bao gom ten mon an, va so luong topping */}
        <div className="dish-container">
          <div className="dish-name">{data.dish}</div>
          <div className="topping-name">
            x{data.numberOfTopping} {data.toppingName}
          </div>
        </div>
        <div className="note-container">
          <img className="note-icon" src="images/note_icon.svg" alt="" />
          <div className="note-text">{data.note}</div>
        </div>
        {/* Footer cua order info, bao gom thoi gian dat hang va action cancel */}
        <div className="time-wrapper">
          <div className="time-container">
            <div className="hour">{data.hour} - </div>
            <div className="date">{data.date}</div>
          </div>
          <Button className="order-action">
            <span className="button-title">Hủy</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
