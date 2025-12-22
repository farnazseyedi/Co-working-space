"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { StepPhone } from "@/app/components/auth/step-phone";
import { StepOtp } from "@/app/components/auth/step-otp";
import { StepUserInfo } from "@/app/components/auth/step-user-info";
import { PhoneFormValues, UserInfoFormValues } from "@/lib/schemas/auth-schema";

interface AuthModalProps {
  children: React.ReactNode;
}

export function AuthModal({ children }: AuthModalProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneSubmit = (data: PhoneFormValues) => {
    setPhoneNumber(data.phoneNumber);
    setStep(2);
  };

  const handleOtpSubmit = (otp: string) => {
    console.log("OTP Verified:", otp);
    setStep(3);
  };

  const handleUserInfoSubmit = (data: UserInfoFormValues) => {
    console.log("User Info Submitted:", data);
    setIsOpen(false);
    router.push("/dashboard");
    setTimeout(resetModal, 300);
  };

  const resetModal = () => {
    setStep(1);
    setPhoneNumber("");
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) setTimeout(resetModal, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden bg-white rounded-[20px]">
        <DialogHeader className="sr-only">
          <DialogTitle>احراز هویت</DialogTitle>
        </DialogHeader>

        <div className="p-8 pt-10">
          {step === 1 && <StepPhone onSuccess={handlePhoneSubmit} />}

          {step === 2 && (
            <StepOtp
              phoneNumber={phoneNumber}
              onSuccess={handleOtpSubmit}
              onBack={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <StepUserInfo
              onSuccess={handleUserInfoSubmit}
              onBack={() => setStep(2)}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
