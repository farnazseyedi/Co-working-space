"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { StepPhone } from "@/app/components/auth/step-phone";
import { StepOtp } from "@/app/components/auth/step-otp";
import { StepUserInfo } from "@/app/components/auth/step-user-info";
import { PhoneFormValues, UserInfoFormValues } from "@/lib/schemas/auth-schema";
import { XIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import RightArrow from "@/icons/arrow-right.svg";
import Image from "next/image";

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

      <DialogContent
        className="w-142.5 h-120.5 p-0 overflow-hidden bg-others-white1 rounded-3xl"
        showCloseButton={false}
      >
        <DialogClose className="absolute top-9 left-9 border-2 rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800">
          <XIcon className="h-4 w-4" />
        </DialogClose>
        <DialogHeader className="sr-only">
          <DialogTitle>احراز هویت</DialogTitle>
        </DialogHeader>

        <div className="flex justify-center items-center">
          {step === 1 && <StepPhone onSuccess={handlePhoneSubmit} />}
          {step === 2 && (
            <div>
              <div>
                <button
                  onClick={() => setStep(1)}
                  className="absolute right-9 top-8 text-neutral-900 hover:text-neutral-950"
                >
                  <Image src={RightArrow} alt="arrow" height={32} width={32} />
                </button>
              </div>
              <div>
                <StepOtp
                  phoneNumber={phoneNumber}
                  onSuccess={handleOtpSubmit}
                />
              </div>
            </div>
          )}
          {step === 3 && (
            <div>
              <div>
                <button
                  onClick={() => setStep(2)}
                  className="absolute right-9 top-8 text-neutral-900 hover:text-neutral-950"
                >
                  <Image src={RightArrow} alt="arrow" height={32} width={32} />
                </button>
              </div>
              <div>
                <StepUserInfo onSuccess={handleUserInfoSubmit} />
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
