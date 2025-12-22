"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneFormValues, phoneSchema } from "@/lib/schemas/auth-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react"; 

interface StepPhoneProps {
  onSuccess: (data: PhoneFormValues) => void;
}

export function StepPhone({ onSuccess }: StepPhoneProps) {
  const form = useForm<PhoneFormValues>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const onSubmit = async (data: PhoneFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 500)); 
    
    onSuccess(data);
  };

  return (
    <div className="flex flex-col gap-6 font-sans" dir="rtl">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-900">ورود | ثبت‌نام</h2>
        <p className="text-sm text-gray-500">
          برای ادامه شماره موبایل خود را وارد کنید.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="شماره موبایل"
                      className="pl-2 pr-10 py-6 text-right rounded-xl border-gray-200 focus-visible:ring-blue-900"
                      {...field}
                    />
                    <Smartphone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </FormControl>
                <FormMessage className="text-right text-xs text-red-500" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#1e2756] hover:bg-[#151b3d] text-white rounded-xl py-6 text-base font-medium"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "در حال پردازش..." : "ادامه"}
          </Button>
        </form>
      </Form>

      <p className="text-[10px] text-gray-400 text-center leading-5">
        ورود یا ثبت‌نام به معنای پذیرش <span className="text-blue-500 cursor-pointer">شرایط و قوانین</span> آکادمی مکین است.
      </p>
    </div>
  );
}