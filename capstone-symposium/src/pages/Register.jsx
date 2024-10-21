import React from "react";
import { Default } from "../layouts/Default";
import useEventbrite from "react-eventbrite-popup-checkout";

export const Register = () => {
  const handleOrderComplete = React.useCallback(() => {
    console.log("Order completed successfully");
  }, []);

  const checkOut = useEventbrite({
    eventId: "1042162645527",
    modal: false,
    onOrderComplete: handleOrderComplete,
    iFrameHeight: 500,
    iFrameAutoAdapt: 100,
  });

  return (
    <>
    <Default>
      <div class="container pt-10 my-10">
      <section className="flex flex-col justify-center align-center">
          <h1 className="reg-heading mt-10">
            Register
          </h1>
          <div className="reg-container my-5">
            {checkOut ? (
              <div id={checkOut.id} />
            ): null}
          </div>
      </section>
      </div>
      <div className="reg-accent"/>
    </Default>
    </>
  );
}
