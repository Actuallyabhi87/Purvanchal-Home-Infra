import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div className="w-full">
        <address>Sector-2 Noida A-23</address>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.411760538768!2d77.31215407461707!3d28.58742168612939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f5fb319d6f%3A0xe5ebacedfd251987!2sa%2C%2023%2C%20A%20Block%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1727249691346!5m2!1sen!2sin"
          width={600}
          height={450}
          className="border-0 w-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default GoogleMap;
