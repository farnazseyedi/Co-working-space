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
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
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
    <div>
      <div className="flex flex-col gap-4 w-115 h-90 items-center pt-3">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-xl font-bold text-neutral-900">ورود | ثبت‌نام</h2>
          <p className="text-sm text-neutral-900">
            برای ادامه شماره موبایل خود را وارد کنید.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-20 w-70 justify-center pt-5"
          >
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="شماره موبایل"
                        className="pl-2 pr-10 py-6 text-right rounded-xl border-neutral-400 focus-visible:placeholder-neutral-900"
                        {...field}
                      />
                      <Smartphone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 focus-visible:text-neutral-900" />
                    </div>
                  </FormControl>
                  <FormMessage className="text-right text-xs text-error-500" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-primary-500 hover:bg-primary-400 text-white rounded-2xl py-6 font-medium"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "در حال پردازش..." : "ادامه"}
            </Button>
          </form>
        </Form>

        <p className="text-[11px] text-neutral-900 pt-2">
          ورود یا ثبت‌نام به معنای پذیرش{" "}
          <span className="text-info-500 cursor-pointer">شرایط و قوانین</span>{" "}
          آکادمی مکین است.
        </p>
      </div>
    </div>
  );
}
