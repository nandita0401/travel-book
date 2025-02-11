import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';  // Import QRCodeCanvas

const QRCodeGenerator = () => {
  // Hardcoded message that will be encoded in the QR code
  const message = 'Embark on a journey through India\'s most breathtaking destinations! From the snow-capped peaks of Kashmir to the golden sands of Jaisalmer, each place holds a story waiting to be explored. Discover hidden gems, historical wonders, and nature’s beauty—your adventure begins now! ✨🌍🚀';

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Scan this QR Code to see the message</h2>
      <div style={{ marginTop: '20px' }}>
        {/* Display the QR code with the fixed message */}
        <QRCodeCanvas value={message} size={256} />
      </div>
      <p style={{ marginTop: '20px' }}>
        Scan the QR code above with your phone to see the message!
      </p>
    </div>
  );
};

export default QRCodeGenerator;
