import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="leading-normal tracking-normal text-white gradient">
      {children}
    </div>
  );
}
