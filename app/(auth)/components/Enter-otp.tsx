"use client";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useState } from "react";

const EnterOtp = () => {
    const [value, setValue] = useState('')
  return (
    <>
     <div className="flex flex-col gap-4">
     <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <div className=" flex justify-between items-center  ">

        <span className=" text-pretty text-sm font-mont text-secondary">
            Resend code
        </span>

        <span className="text-primary text-sm text-gray-600 font-mont">
            5
        </span>
        
      </div>

      <Button >
        Resend code
      </Button>
     </div>
    </>
  );
};

export default EnterOtp;
