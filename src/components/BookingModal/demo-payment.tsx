import React from "react";

const DemoPayment = (props: { handle: () => void }) => {
  return (
    <div>
      <button onClick={props.handle}>MAKE PAYMENT</button>
    </div>
  );
};

export default DemoPayment;
