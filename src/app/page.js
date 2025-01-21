'use client';

import Logo from "@/assets/svg/pinecone-logo";
import Input from "@/components/Input";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center bg-red-200">
      <Logo/>
      <Input label={"First name"} type={"text"} />
    </div>
  );
}
