import { useState } from "react";
import { SuccessIcon } from "../../assets/icons/SuccessIcon";
import { CloseIcon } from "../../assets/icons/CloseIcon";

export default function SuccessNotification() {
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <section className="bg-gray-2 py-[60px] dark:bg-dark">
        <div className="mx-auto px-4 sm:container">
          <div className="flex justify-end">
            <div className="relative flex w-full max-w-[460px] items-center rounded-lg border border-primary bg-primary/5 px-5 py-[18px]">
              <span className="mr-4 flex h-[30px] w-full max-w-[30px] items-center justify-center rounded-full bg-primary">
                <SuccessIcon />
              </span>
              <p className="text-base font-semibold text-primary sm:text-lg">
                Message sent successfully
              </p>
              <button
                onClick={handleClose}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-dark-5 hover:text-primary dark:text-dark-6"
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
