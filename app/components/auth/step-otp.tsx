"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OtpFormValues, otpSchema } from "@/lib/schemas/auth-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface StepOtpProps {
  phoneNumber: string;
  onBack: () => void;
  onSuccess: (otp: string) => void;
}

export function StepOtp({ phoneNumber, onBack, onSuccess }: StepOtpProps) {
  const [timer, setTimer] = useState(94);

  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `0${m}:${s < 10 ? `0${s}` : s}`;
  };

  const onSubmit = async (data: OtpFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("OTP Sent:", data.otp);
    onSuccess(data.otp);
  };

  return (
    <div className="flex flex-col gap-6 font-sans">
      <div className="relative flex items-center justify-center">
        <button
          onClick={onBack}
          className="absolute right-0 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowRight className="w-5 h-5 text-gray-600" />
        </button>
        <h2 className="text-xl font-bold text-gray-900">
          کد تایید را وارد کنید
        </h2>
      </div>

      <p className="text-sm text-center text-gray-500">
        کد ۵ رقمی به شماره{" "}
        <span className="font-sans font-semibold text-gray-800 dir-ltr inline-block">
          {phoneNumber}
        </span>{" "}
        ارسال شد
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex flex-col items-center"
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP
                    maxLength={5}
                    {...field}
                  >
                    <InputOTPGroup className="gap-2" dir="ltr">
                      <InputOTPSlot
                        index={0}
                        className="w-12 h-12 rounded-lg border border-gray-300 text-lg"
                      />
                      <InputOTPSlot
                        index={1}
                        className="w-12 h-12 rounded-lg border border-gray-300 text-lg"
                      />
                      <InputOTPSlot
                        index={2}
                        className="w-12 h-12 rounded-lg border border-gray-300 text-lg"
                      />
                      <InputOTPSlot
                        index={3}
                        className="w-12 h-12 rounded-lg border border-gray-300 text-lg"
                      />
                      <InputOTPSlot
                        index={4}
                        className="w-12 h-12 rounded-lg border border-gray-300 text-lg"
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage className="text-center text-xs text-red-500 mt-2" />
              </FormItem>
            )}
          />

          <div className="text-center text-xs text-gray-500 font-sans">
            {timer > 0 ? (
              <span>{formatTime(timer)} مانده تا ارسال مجدد کد</span>
            ) : (
              <button
                type="button"
                className="text-blue-600 font-medium hover:underline"
                onClick={() => {
                  setTimer(120);
                }}
              >
                ارسال مجدد کد
              </button>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-[#1e2756] hover:bg-[#151b3d] text-white rounded-xl py-6 text-base font-medium"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "در حال بررسی..." : "ادامه"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
