import "./AgencyInfo.scss";

// component thông tin của đại lý, bên phải popup chi tiết đơn hàng.
function AgencyInfo({ agencyData }) {
  return (
    <div className="agency-info-wrapper">
      <div className="info-field-container">
        <img
          className="info-field-icon"
          src="images/location_icon.svg"
          alt="location icon"
        />
        <div className="info-field-text">Địa chỉ: {agencyData.address}</div>
      </div>
      <div className="info-field-container">
        <img
          className="info-field-icon"
          src="images/account_icon.svg"
          alt="account icon"
        />
        <div className="info-field-text">Đại lý: {agencyData.agencyName}</div>
      </div>
      <div className="info-field-container">
        <img
          className="info-field-icon"
          src="images/phone_icon.svg"
          alt="phone icon"
        />
        <div className="info-field-text">
          Số điện thoại: {agencyData.agencyPhone}
        </div>
      </div>
      <div className="info-field-container">
        <img
          className="info-field-icon"
          src="images/request_icon.svg"
          alt="request icon"
        />
        <div className="info-field-text">
          Số lượng y/c: {agencyData.numberOfRequest}
        </div>
      </div>
    </div>
  );
}

export default AgencyInfo;
