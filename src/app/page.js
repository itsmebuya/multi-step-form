'use client';

import Header from "@/components/Header";
import Input from "@/components/Input";

export default function Home() {
  return (
    <div className="flex items-center h-screen justify-center bg-[#F4F4F4]">
      <div className="bg-white p-8 flex flex-col rounded-lg">
        <Header />
        <div className="flex flex-col gap-3">
          <Input label={"First name"} type={"text"} />
          <Input label={"Last name"} type={"text"} />
          <Input label={"Username"} type={"text"} />
        </div>

      </div>

    </div>
  );
}
