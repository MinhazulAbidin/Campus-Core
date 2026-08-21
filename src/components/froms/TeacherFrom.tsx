"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters long!" }).max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

const TeacherFrom = ({ type, data, setOpen }: { type: "create" | "update"; data: any; setOpen: Function }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col overflow-hidden rounded-xl bg-white">
      <div className="border-b border-slate-100 px-4 py-4 sm:px-6 sm:py-5">
        <div className="pr-8">
          <h1 className="text-lg font-semibold tracking-tight text-slate-800 sm:text-xl">{type === "create" ? "Create New Teacher" : "Update Teacher"}</h1>
          <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">Fill in the information below to {type === "create" ? "create a new teacher profile." : "update the teacher profile."}</p>
        </div>
      </div>

      <div className="max-h-[calc(100vh-170px)] overflow-y-auto">
        <div className="px-4 py-5 sm:px-6 sm:py-7">
          <div className="mb-5">
            <h2 className="text-sm font-semibold text-slate-700 sm:text-[15px]">Authentication Information</h2>
            <p className="mt-1 text-[11px] leading-5 text-slate-400 sm:text-xs">Login credentials and account information</p>
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            <InputField label="Username" name="username" defaultValue={data?.username} register={register} error={errors?.username} />
            <InputField label="Email" name="email" defaultValue={data?.email} register={register} error={errors?.email} />
            <InputField label="Password" name="password" type="password" defaultValue={data?.password} register={register} error={errors?.password} />
          </div>
        </div>

        <div className="border-t border-slate-100 px-4 py-5 sm:px-6 sm:py-7">
          <div className="mb-5">
            <h2 className="text-sm font-semibold text-slate-700 sm:text-[15px]">Personal Information</h2>
            <p className="mt-1 text-[11px] leading-5 text-slate-400 sm:text-xs">Basic information about the teacher</p>
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            <InputField label="First Name" name="firstName" defaultValue={data?.firstName} register={register} error={errors.firstName} />
            <InputField label="Last Name" name="lastName" defaultValue={data?.lastName} register={register} error={errors.lastName} />
            <InputField label="Phone" name="phone" defaultValue={data?.phone} register={register} error={errors.phone} />
            <InputField label="Address" name="address" defaultValue={data?.address} register={register} error={errors.address} inputProps={{ className: "lg:col-span-2" }} />
            <InputField label="Blood Type" name="bloodType" defaultValue={data?.bloodType} register={register} error={errors.bloodType} />
            <InputField label="Birthday" name="birthday" defaultValue={data?.birthday} register={register} error={errors.birthday} type="date" />

            <div className="flex w-full flex-col gap-2">
              <label htmlFor="sex" className="text-[13px] font-medium text-slate-600">Sex</label>
              <select id="sex" {...register("sex")} defaultValue={data?.sex} className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3.5 text-[13px] text-slate-700 outline-none transition-all hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.sex?.message && <p className="px-0.5 text-[11px] font-medium text-red-500">{errors.sex.message.toString()}</p>}
            </div>

            <div className="flex w-full flex-col gap-2">
              <label htmlFor="img" className="text-[13px] font-medium text-slate-600">Profile Photo</label>
              <label htmlFor="img" className="flex h-11 cursor-pointer items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3.5 transition-all hover:border-indigo-400 hover:bg-indigo-50/40">
                <Image src="/upload.png" alt="Upload" width={20} height={20} />
                <span className="truncate text-[13px] text-slate-500">Choose a photo</span>
              </label>
              <input type="file" id="img" {...register("img")} className="hidden" />
              {errors.img?.message && <p className="px-0.5 text-[11px] font-medium text-red-500">{errors.img.message.toString()}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-2 border-t border-slate-100 bg-slate-50/70 px-4 py-4 sm:flex-row sm:justify-end sm:gap-3 sm:px-6">
        <button type="button" onClick={() => setOpen(false)} className="h-10 w-full rounded-lg border border-slate-200 bg-white px-5 text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 sm:w-auto">Cancel</button>
        <button type="submit" className="h-10 w-full rounded-lg bg-indigo-600 px-6 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 active:scale-[0.98] sm:w-auto">{type === "create" ? "Create Teacher" : "Update Teacher"}</button>
      </div>
    </form>
  );
};

export default TeacherFrom;