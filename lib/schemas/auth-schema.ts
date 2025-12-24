import { z } from "zod";

export const phoneSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, "شماره موبایل الزامی است")
    .regex(/^09\d{9}$/, "شماره موبایل نامعتبر است (مثال: 09123456789)"),
});

export const otpSchema = z.object({
  otp: z.string().min(5, {
    message: "کد تایید باید ۵ رقم باشد",
  }),
});

export const userInfoSchema = z.object({
  fullName: z.string().min(3, "نام و نام خانوادگی باید حداقل ۳ حرف باشد"),
  nationalId: z.string().regex(/^\d{10}$/, "کد ملی باید دقیقا ۱۰ رقم باشد"),
});

export type UserInfoFormValues = z.infer<typeof userInfoSchema>;
export type PhoneFormValues = z.infer<typeof phoneSchema>;
export type OtpFormValues = z.infer<typeof otpSchema>;
