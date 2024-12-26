import "./OrderList.scss";
import "../../../../styles/custom_modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Modal, Button } from "antd";
import AgencyInfo from "../agency/AgencyInfo";
import OrderInfo from "../order_by_kitchen/OrderInfo";
import { orderListData } from "../../mock_data/OrderListData";
import { orderDetailData } from "../../mock_data/OrderDetailData";

// Nội dung của trang Đơn hàng, bao gồm list đơn hàng chờ xác nhận, và 2 popup Chi tiết đơn hàng
// và pop up xác nhận đơn hàng.
function OrderListComponent() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isConfirmModal, setIsConfirmModal] = useState(false);
  const [agencyData, setAgencyData] = useState({});

  const handleShowModal = (data) => {
    setAgencyData(data);
    setIsShowModal(true);
  };
  const handleCancel = () => {
    setIsShowModal(false);
    setIsConfirmModal(false);
  };
  const handleConfirmOrder = () => {
    setIsConfirmModal(true);
  };

  return (
    <div className="order-wrapper">
      <Modal
        title={<div className="center-title">Chi tiết đơn hàng</div>}
        open={isShowModal}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <div className="modal-content-container">
          {/* Scroll content */}
          <div className="modal-scrollable-content">
            {orderDetailData.map((order, index) => (
              <OrderInfo key={index} data={order} />
            ))}
          </div>

          {/* Fixed content*/}
          <div className="modal-static-content">
            <AgencyInfo agencyData={agencyData} />
            <div className="modal-footer">
              <Button className="cancel-button" onClick={handleCancel}>
                Hủy
              </Button>
              <Button
                className="accept-button"
                type="primary"
                onClick={handleConfirmOrder}
              >
                Xác nhận
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      {/* Header of Order list */}
      <div className="order-header">
        <div className="order-header-content">
          <div className="header-title">Đơn hàng chờ xác nhận</div>
          <div className="header-action">
            <div className="search-wrapper">
              <div className="search-container">
                <div className="search-icon">
                  <FontAwesomeIcon
                    className="color-icon"
                    icon={faMagnifyingGlass}
                  />
                </div>
                <input className="search-input" placeholder="Tìm kiếm" />
              </div>
            </div>

            <div className="filter-container">
              <FontAwesomeIcon className="color-icon" icon={faFilter} />
              <span>Lọc</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body of Order list */}
      {orderListData.map((order, index) => (
        <>
          <div className="order-body">
            <div className="kitchen-wrapper">
              <div className="kitchen-name">{order.kitchenName} -&nbsp;</div>
              <div className="kitchen-phone">{order.kitchenPhone}</div>
            </div>
            <div className="order-table-wrapper">
              <div className="table-container">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th className="table-right">STT</th>
                      <th>Địa chỉ</th>
                      <th>Đại lý</th>
                      <th>Điện thoại liên hệ</th>
                      <th>Số lượng y/c</th>
                      <th></th>
                    </tr>
                  </thead>
                  {order.kitchenOrder.map((order_by_kitchen, index) => (
                    <>
                      <tbody>
                        <tr>
                          <td className="table-right">{index + 1}</td>
                          <td>{order_by_kitchen.address}</td>
                          <td>{order_by_kitchen.agencyName}</td>
                          <td>{order_by_kitchen.agencyPhone}</td>
                          <td>{order_by_kitchen.numberOfRequest}</td>
                          <td>
                            <div
                              className="detail-button"
                              onClick={() => handleShowModal(order_by_kitchen)}
                            >
                              Chi tiết
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </>
      ))}
      <Modal
        open={isConfirmModal}
        footer={null}
        width={300}
        height={300}
        onCancel={handleCancel}
        closable={true}
      >
        <div className="success-wrapper">
          <img
            className="success-icon"
            src="images/success.svg"
            alt="success"
          />
          <div className="success-text">
            Xác nhận đơn hàng thành công. Thông báo đã được gửi về đại lý và bếp
            để tiến hành sản xuất.
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default OrderListComponent;
