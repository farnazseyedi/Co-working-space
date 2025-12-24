"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserInfoFormValues, userInfoSchema } from "@/lib/schemas/auth-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

interface StepUserInfoProps {
  onSuccess: (data: UserInfoFormValues) => void;
}

export function StepUserInfo({ onSuccess }: StepUserInfoProps) {
  const form = useForm<UserInfoFormValues>({
    resolver: zodResolver(userInfoSchema),
    defaultValues: {
      fullName: "",
      nationalId: "",
    },
  });

  const onSubmit = async (data: UserInfoFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    onSuccess(data);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="relative flex items-center justify-center mb-2">
        <div className="text-center">
          <h2 className="text-lg font-bold text-neutral-900">
            اطلاعات حساب کاربری رو کامل کن
          </h2>
          <p className="text-xs text-neutral-600 mt-1">برای تجربه امن‌تر</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-xs font-medium text-neutral-900">
                  نام و نام خانوادگی(اجباری)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="محمدمهدی حسن‌پور"
                    className="py-6 text-right rounded-xl border-neutral-400 focus-visible:placeholder-neutral-900"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-error-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nationalId"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-xs font-medium text-neutral-900">
                  شماره ملی(اجباری)
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="1234567890"
                    className="py-6 text-right rounded-xl border-neutral-400 focus-visible:placeholder-neutral-900"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value.slice(0, 10);
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-primary-500 hover:bg-primary-400 text-white rounded-2xl py-6 font-medium transition-all"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "در حال ثبت..." : "ثبت"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
