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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface StepUserInfoProps {
  onBack: () => void;
  onSuccess: (data: UserInfoFormValues) => void;
}

export function StepUserInfo({ onBack, onSuccess }: StepUserInfoProps) {
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
    <div className="flex flex-col gap-6 font-sans" dir="rtl">
      <div className="relative flex items-center justify-center mb-2">
        <button
          onClick={onBack}
          className="absolute right-0 p-1 rounded-full hover:bg-gray-100 transition-colors"
          type="button"
        >
          <ArrowRight className="w-5 h-5 text-gray-600" />
        </button>
        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-900">
            اطلاعات حساب کاربری رو کامل کن
          </h2>
          <p className="text-xs text-gray-500 mt-1">برای تجربه امن‌تر</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-xs font-medium text-gray-700">
                  نام و نام خانوادگی(اجباری)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="محمدمهدی حسن‌پور"
                    className="py-6 text-right rounded-xl border-gray-200 focus-visible:ring-blue-900 placeholder:text-gray-300"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nationalId"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-xs font-medium text-gray-700">
                  شماره ملی(اجباری)
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="1421791080"
                    className="py-6 text-right rounded-xl border-gray-200 focus-visible:ring-blue-900 placeholder:text-gray-300 font-sans"
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
              className="w-full bg-[#1e2756] hover:bg-[#151b3d] text-white rounded-xl py-6 text-base font-medium transition-all"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "در حال ثبت..." : "ادامه"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
