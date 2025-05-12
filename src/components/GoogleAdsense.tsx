
import React, { useEffect } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

const GoogleAdsense: React.FC<AdSenseProps> = ({ 
  adSlot = "7782227990",
  adFormat = "auto",
  fullWidth = false,
  style = { display: 'block', textAlign: 'center' }
}) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className="ad-container my-4" style={style}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: fullWidth ? '100%' : undefined,
          height: '320px',
          overflow: 'hidden'
        }}
        data-ad-client="ca-pub-2231823251539859"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidth ? 'true' : 'false'}
      />
    </div>
  );
};

export default GoogleAdsense;
