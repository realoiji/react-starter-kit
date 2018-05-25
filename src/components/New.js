import React from 'react';

export default class extends React.PureComponent {
  render() {
    return (
      <div className="new-container">
        <h1><span>LIVE</span> MESSAGE</h1>
        <div className="new-item">
          <div className="new-title">ข่าวทั่วไป</div>
          <div className="new-time">
            15:40
          </div>
          <div className="new-description">
            มีฝนตกหนักทุกพื้นที่
          </div>
        </div>
        <div className="new-item">
          <div className="new-title">ข่าวทั่วไป</div>
          <div className="new-time">
            15:40
          </div>
          <div className="new-description">
            มีฝนตกหนักทุกพื้นที่
          </div>
        </div>
      </div>
    );
  }
}
